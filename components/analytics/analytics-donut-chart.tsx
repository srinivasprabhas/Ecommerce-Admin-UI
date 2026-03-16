"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

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
  { name: "Completed", value: 88, fill: "var(--chart-1)" },
  { name: "Pending", value: 12, fill: "var(--chart-2)" },
];

const chartConfig = {
  completed: { label: "Completed", color: "var(--chart-1)" },
  pending: { label: "Pending", color: "var(--chart-2)" },
} satisfies ChartConfig;

export function AnalyticsDonutChart() {
  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Tickets Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[180px]"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              strokeWidth={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          88%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy ?? 0) + 20}
                          className="fill-muted-foreground text-xs"
                        >
                          Completed
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-4 grid w-full grid-cols-3 gap-2 text-center text-sm">
          <div className="rounded-lg border border-border bg-muted/30 px-2 py-2">
            <p className="font-semibold">40</p>
            <p className="text-xs text-muted-foreground">New Tickets</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 px-2 py-2">
            <p className="font-semibold">25</p>
            <p className="text-xs text-muted-foreground">Open Tickets</p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 px-2 py-2">
            <p className="font-semibold">1 Day</p>
            <p className="text-xs text-muted-foreground">Response Time</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
