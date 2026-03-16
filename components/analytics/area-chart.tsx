"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  { day: "Mon", value: 28000 },
  { day: "Tue", value: 26500 },
  { day: "Wed", value: 29000 },
  { day: "Thu", value: 27200 },
  { day: "Fri", value: 30200 },
  { day: "Sat", value: 26800 },
  { day: "Sun", value: 28450 },
];

const chartConfig = {
  value: {
    label: "Sales",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AnalyticsAreaChart() {
  return (
    <Card className="rounded-xl border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Average Daily Sales</CardTitle>
        <p className="text-2xl font-semibold">$28,450</p>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <AreaChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              fill="var(--color-value)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
