"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
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
  { day: "Mo", value: 180 },
  { day: "Tu", value: 220 },
  { day: "We", value: 190 },
  { day: "Th", value: 260 },
  { day: "Fr", value: 310 },
  { day: "Sa", value: 140 },
  { day: "Su", value: 168 },
];

const chartConfig = {
  value: {
    label: "Earning",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function EarningChart() {
  return (
    <Card className="rounded-xl border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-semibold">Earning Reports</CardTitle>
          <CardDescription>Last 28 days</CardDescription>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold">$1,468</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-400">+4.2%</p>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <BarChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
