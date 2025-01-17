import { useEffect, useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { useAdminCheck } from "@/hooks/use-admin-check";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, UserCog } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface UserProfile {
  id: string;
  full_name: string;
  username: string;
  store_name: string;
  role: string;
  email?: string;
}

export default function Users() {
  const { data: isAdmin, isLoading: adminCheckLoading } = useAdminCheck();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!adminCheckLoading && !isAdmin) {
      navigate("/dashboard");
    }
  }, [isAdmin, adminCheckLoading, navigate]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Fetch profiles
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("*");

      if (profilesError) throw profilesError;

      // Fetch roles
      const { data: roles, error: rolesError } = await supabase
        .from("user_roles")
        .select("*");

      if (rolesError) throw rolesError;

      // Fetch user emails using the Edge Function
      const { data: authData, error: authError } = await supabase.functions.invoke('list-users');
      
      if (authError) throw authError;

      // Combine the data
      const combinedData = profiles.map((profile) => {
        const userRole = roles.find((role) => role.user_id === profile.id)?.role || "user";
        const authUser = authData.users?.find((user: User) => user.id === profile.id);
        return {
          ...profile,
          role: userRole,
          email: authUser?.email
        };
      });

      setUsers(combinedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users",
      });
    }
  };

  const promoteToAdmin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from("user_roles")
        .update({ role: "admin" })
        .eq("user_id", userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User promoted to admin",
      });

      fetchUsers();
    } catch (error) {
      console.error("Error promoting user:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to promote user",
      });
    }
  };

  const demoteToUser = async (userId: string) => {
    try {
      const { error } = await supabase
        .from("user_roles")
        .update({ role: "user" })
        .eq("user_id", userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Admin demoted to user",
      });

      fetchUsers();
    } catch (error) {
      console.error("Error demoting admin:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to demote admin",
      });
    }
  };

  if (adminCheckLoading || loading) {
    return (
      <div className="flex min-h-screen">
        <DashboardSidebar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 p-8 pl-[calc(16rem+2rem)]">
        <div className="flex items-center gap-2 mb-6">
          <UserCog className="h-6 w-6" />
          <h1 className="text-2xl font-bold">User Management</h1>
        </div>
        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[200px]">Full Name</TableHead>
                <TableHead className="w-[200px]">Username</TableHead>
                <TableHead className="w-[200px]">Email</TableHead>
                <TableHead className="w-[200px]">Store Name</TableHead>
                <TableHead className="w-[100px]">Role</TableHead>
                <TableHead className="w-[200px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.full_name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.store_name}</TableCell>
                  <TableCell className="capitalize">{user.role}</TableCell>
                  <TableCell>
                    {user.role === "admin" ? (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => demoteToUser(user.id)}
                      >
                        Demote to User
                      </Button>
                    ) : (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => promoteToAdmin(user.id)}
                      >
                        Promote to Admin
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}