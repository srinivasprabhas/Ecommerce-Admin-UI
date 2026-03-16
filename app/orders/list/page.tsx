import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrdersTable } from "@/components/orders/orders-table";

export default function OrdersListPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Orders</h1>
        <Button asChild>
          <Link href="/orders/create" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Order
          </Link>
        </Button>
      </div>

      {/* Status tabs */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="processed">Processed</TabsTrigger>
          <TabsTrigger value="returned">Returned</TabsTrigger>
          <TabsTrigger value="canceled">Canceled</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Filters + table */}
      <OrdersTable />
    </div>
  );
}

