import { ArrowDown, ArrowUp, CalendarRange, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevenueChart } from "@/components/sales/revenue-chart";
import { BestSellingProducts } from "@/components/sales/best-selling-products";
import { OrderStatus } from "@/components/sales/order-status";
import { SalesTable } from "@/components/sales/sales-table";

const STAT_CARDS = [
  { title: "Total Balance", value: "$103,045", change: "+3.6%", positive: true, sub: "compare from last month" },
  { title: "Total Income", value: "$78,000", change: "+2.5%", positive: true },
  { title: "Total Expense", value: "$15,010", change: "-6.0%", positive: false },
  { title: "Total Sales Tax", value: "$9,090", change: "+5.0%", positive: true },
];

export default function SalesDashboardPage() {
  return (
    <div className="w-full px-6 space-y-6 lg:px-8">
      {/* Page header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-lg font-semibold tracking-tight">Sales Dashboard</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 transition-all duration-200">
            <CalendarRange className="h-4 w-4" />
            18 Feb 2026 - 17 Mar 2026
          </Button>
          <Button variant="outline" size="sm" className="gap-2 transition-all duration-200">
            <Download className="h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      {/* Row 1: Revenue chart (left) + 4 stat cards in 2x2 (right) */}
      <div className="grid w-full gap-6 lg:grid-cols-[2fr_1fr]">
        <RevenueChart />
        <div className="grid grid-cols-2 gap-4">
          {STAT_CARDS.map((item) => (
            <Card
              key={item.title}
              className="flex h-full flex-col rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur transition-all duration-200"
            >
              <CardHeader className="space-y-2 pb-2">
                <CardTitle className="text-sm font-semibold text-muted-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-2 p-4 pt-0 sm:p-5 sm:pt-0">
                <p className="text-2xl font-bold tracking-tight">{item.value}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  {item.positive ? (
                    <span className="flex items-center gap-0.5 text-green-500">
                      <ArrowUp className="h-3.5 w-3.5" />
                      {item.change}
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5 text-red-500">
                      <ArrowDown className="h-3.5 w-3.5" />
                      {item.change}
                    </span>
                  )}
                  {item.sub && <span className="ml-1">{item.sub}</span>}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Row 2: Best Selling (left) + Track Order Status + Orders (right) */}
      <div className="grid gap-6 lg:grid-cols-2">
        <BestSellingProducts />
        <div className="space-y-6">
          <OrderStatus />
          <SalesTable />
        </div>
      </div>
    </div>
  );
}
