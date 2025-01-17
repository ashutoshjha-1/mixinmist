import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Order } from "@/types/order";
import { useToast } from "@/hooks/use-toast";

export const useOrders = (userId: string | undefined, isAdmin: boolean | undefined) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [allUserOrders, setAllUserOrders] = useState<Order[]>([]);
  const { toast } = useToast();

  const fetchOrders = async (userId: string) => {
    try {
      console.log("Fetching orders for user:", userId);
      
      // Modified query to exclude sample orders by joining with products table
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (
            id,
            order_id,
            product_id,
            quantity,
            price,
            created_at,
            products (
              is_sample
            )
          )
        `)
        .eq('store_id', userId)
        .order('created_at', { ascending: false });

      if (ordersError) {
        console.error("Error fetching orders:", ordersError);
        throw ordersError;
      }

      // Filter out orders that contain only sample products
      const regularOrders = ordersData?.filter(order => {
        return order.order_items.some(item => !item.products?.is_sample);
      }) || [];

      // Fetch store names for the orders
      const storeIds = [...new Set(regularOrders?.map(order => order.store_id) || [])];
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("id, store_name")
        .in('id', storeIds);

      if (profilesError) {
        console.error("Error fetching profiles:", profilesError);
        throw profilesError;
      }

      const storeNameMap = new Map(profilesData?.map(profile => [profile.id, profile.store_name]));
      
      const processedOrders = regularOrders?.map(order => ({
        ...order,
        store_name: storeNameMap.get(order.store_id) || "Unknown Store",
        order_items: Array.isArray(order.order_items) ? order.order_items : []
      })) || [];
      
      setOrders(processedOrders);
    } catch (error: any) {
      console.error("Error in fetchOrders:", error);
      toast({
        variant: "destructive",
        title: "Error fetching orders",
        description: error.message,
      });
    }
  };

  const fetchAllUserOrders = async () => {
    try {
      console.log("Fetching all user orders as admin");
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`
          *,
          order_items (
            id,
            order_id,
            product_id,
            quantity,
            price,
            created_at,
            products (
              is_sample
            )
          )
        `)
        .order('created_at', { ascending: false });

      if (ordersError) {
        console.error("Error fetching all orders:", ordersError);
        throw ordersError;
      }

      // Filter out orders that contain only sample products
      const regularOrders = ordersData?.filter(order => {
        return order.order_items.some(item => !item.products?.is_sample);
      }) || [];

      // Fetch store names for all orders
      const storeIds = [...new Set(regularOrders?.map(order => order.store_id) || [])];
      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select("id, store_name")
        .in('id', storeIds);

      if (profilesError) {
        console.error("Error fetching profiles:", profilesError);
        throw profilesError;
      }

      const storeNameMap = new Map(profilesData?.map(profile => [profile.id, profile.store_name]));

      const processedOrders = regularOrders?.map(order => ({
        ...order,
        store_name: storeNameMap.get(order.store_id) || "Unknown Store",
        order_items: Array.isArray(order.order_items) ? order.order_items : []
      })) || [];

      setAllUserOrders(processedOrders);
    } catch (error: any) {
      console.error("Error in fetchAllUserOrders:", error);
      toast({
        variant: "destructive",
        title: "Error fetching all user orders",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    if (userId) {
      fetchOrders(userId);
      if (isAdmin) {
        fetchAllUserOrders();
      }
    }
  }, [userId, isAdmin]);

  return { orders, allUserOrders };
};