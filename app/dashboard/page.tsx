import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarInteractive } from "@/components/dashboard/bar-chart";
import { ChartLineLinear } from "@/components/dashboard/line-chart";
import { ChartPieDonutText } from "@/components/dashboard/donut-chart";
import SalesLocation from "@/components/dashboard/sales-location";
import RecentOrders from "@/components/dashboard/recent-orders";
import BestProducts from "@/components/dashboard/best-products";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Row 1: Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">
              $128,430
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              +12.3% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              New Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">
              1,284
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              +8.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Active Accounts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">
              3,452
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              +3.4% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Products Sold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">
              9,874
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              +18.6% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Row 2: Bar & Line charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartBarInteractive />
        <ChartLineLinear />
      </div>

      {/* Row 3: Sales by Location & Donut chart */}
      <div className="grid gap-6 md:grid-cols-2">
        <SalesLocation />
        <ChartPieDonutText />
      </div>

      {/* Row 4: Recent Orders & Best Products */}
      <div className="grid gap-6 md:grid-cols-2">
        <RecentOrders />
        <BestProducts />
      </div>
    </div>
  );
}