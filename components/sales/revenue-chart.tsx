"use client";

import * as React from "react";
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

const chartData = Array.from({ length: 28 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (27 - i));
  return {
    date: d.toISOString().slice(0, 10),
    desktop: Math.round(400 + Math.random() * 200),
    mobile: Math.round(380 + Math.random() * 220),
  };
});

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  const totals = React.useMemo(
    () => ({
      desktop: chartData.reduce((a, c) => a + c.desktop, 0),
      mobile: chartData.reduce((a, c) => a + c.mobile, 0),
    }),
    []
  );

  return (
    <Card className="rounded-xl border">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base font-semibold">Revenue Chart</CardTitle>
          <CardDescription>Last 28 days</CardDescription>
        </div>
        <div className="flex gap-6 text-sm">
          <div>
            <p className="text-muted-foreground">Desktop</p>
            <p className="font-semibold tabular-nums">{totals.desktop.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Mobile</p>
            <p className="font-semibold tabular-nums">{totals.mobile.toLocaleString()}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[260px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={24}
              tickFormatter={(v) =>
                new Date(v).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(v) =>
                    new Date(v).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />
              }
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
