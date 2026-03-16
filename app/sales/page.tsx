import { CalendarRange, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "@/components/sales/revenue-chart";
import { BestSellingProducts } from "@/components/sales/best-selling-products";
import { OrderStatus } from "@/components/sales/order-status";
import { SalesTable } from "@/components/sales/sales-table";

export default function SalesDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Sales Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <CalendarRange className="h-4 w-4" />
            18 Feb 2026 - 17 Mar 2026
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      {/* Top section: Revenue chart (left) + 4 stat cards (right) */}
      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        <RevenueChart />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Card className="rounded-xl border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">$103,045</p>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">+3.6% compare from last month</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">$78,000</p>
              <p className="mt-1 text-xs text-muted-foreground">+2.5%</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">$15,010</p>
              <p className="mt-1 text-xs text-destructive">-6.0%</p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Sales Tax</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold tracking-tight">$9,090</p>
              <p className="mt-1 text-xs text-muted-foreground">+5.0%</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Second row: Best Selling (left) + Order Status (right) */}
      <div className="grid gap-6 md:grid-cols-2">
        <BestSellingProducts />
        <OrderStatus />
      </div>

      {/* Orders table */}
      <SalesTable />
    </div>
  );
}
