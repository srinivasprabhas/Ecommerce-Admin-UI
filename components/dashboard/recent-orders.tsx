"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTableWithColumnFilterDemo from "@/components/shadcn-studio/data-table/data-table-04";

export default function RecentOrders() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTableWithColumnFilterDemo />
      </CardContent>
    </Card>
  );
}

