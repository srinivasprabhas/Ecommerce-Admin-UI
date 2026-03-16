"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DataTableWithColumnFilterDemo from "@/components/shadcn-studio/data-table/data-table-04";

export default function BestProducts() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Best Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTableWithColumnFilterDemo />
      </CardContent>
    </Card>
  );
}

