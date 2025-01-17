import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Settings,
  User,
  Search,
  PackageSearch,
  Menu,
  ChevronLeft,
  Users
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAdminCheck } from "@/hooks/use-admin-check";

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data: isAdmin } = useAdminCheck();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-4 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50"
      >
        {isCollapsed ? (
          <Menu className="h-4 w-4 text-gray-600" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        )}
      </button>

      <div className="space-y-4 p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Dashboard</span>}
        </NavLink>

        {isAdmin && (
          <NavLink
            to="/users"
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 p-2 rounded-lg transition-colors",
                isCollapsed ? "justify-center" : "",
                isActive
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )
            }
          >
            <Users className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span>Users</span>}
          </NavLink>
        )}

        <NavLink
          to="/find-products"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <Search className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Find Products</span>}
        </NavLink>

        <NavLink
          to="/my-products"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <Package className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>My Products</span>}
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <ShoppingCart className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Orders</span>}
        </NavLink>

        <NavLink
          to="/sample-orders"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <PackageSearch className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Sample Orders</span>}
        </NavLink>

        <NavLink
          to="/store-settings"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>Store Settings</span>}
        </NavLink>

        <NavLink
          to="/my-account"
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 p-2 rounded-lg transition-colors",
              isCollapsed ? "justify-center" : "",
              isActive
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )
          }
        >
          <User className="h-5 w-5 flex-shrink-0" />
          {!isCollapsed && <span>My Account</span>}
        </NavLink>
      </div>
    </div>
  );
};
