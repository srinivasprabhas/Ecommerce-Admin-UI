"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { month: "Jan", revenue: 4200, sales: 2800 },
  { month: "Feb", revenue: 3800, sales: 3100 },
  { month: "Mar", revenue: 5100, sales: 2900 },
  { month: "Apr", revenue: 4600, sales: 3400 },
  { month: "May", revenue: 5500, sales: 3800 },
  { month: "Jun", revenue: 6200, sales: 4100 },
];

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  sales: { label: "Sales", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function TotalEarningChart() {
  return (
    <Card className="rounded-xl border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Total Earning</CardTitle>
        <span className="text-2xl font-semibold">83%</span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[180px] w-full">
          <BarChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="revenue" stackId="a" fill="var(--color-revenue)" radius={[0, 0, 0, 0]} />
            <Bar dataKey="sales" stackId="a" fill="var(--color-sales)" radius={[0, 0, 0, 0]} />
          </BarChart>
        </ChartContainer>
        <div className="mt-4 flex justify-between border-t border-border pt-3 text-sm">
          <div>
            <p className="text-muted-foreground">Total Revenue</p>
            <p className="font-semibold text-emerald-600 dark:text-emerald-400">+126</p>
          </div>
          <div>
            <p className="text-muted-foreground">Total Sales</p>
            <p className="font-semibold text-destructive">-98</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
