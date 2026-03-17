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

// Static data to avoid hydration mismatch (no Math.random() / new Date() in render)
const chartData = [
  { date: "2026-02-19", desktop: 512, mobile: 498 },
  { date: "2026-02-20", desktop: 548, mobile: 520 },
  { date: "2026-02-21", desktop: 491, mobile: 505 },
  { date: "2026-02-22", desktop: 530, mobile: 545 },
  { date: "2026-02-23", desktop: 565, mobile: 488 },
  { date: "2026-02-24", desktop: 502, mobile: 532 },
  { date: "2026-02-25", desktop: 518, mobile: 510 },
  { date: "2026-02-26", desktop: 540, mobile: 525 },
  { date: "2026-02-27", desktop: 495, mobile: 498 },
  { date: "2026-02-28", desktop: 522, mobile: 541 },
  { date: "2026-03-01", desktop: 555, mobile: 515 },
  { date: "2026-03-02", desktop: 488, mobile: 530 },
  { date: "2026-03-03", desktop: 535, mobile: 502 },
  { date: "2026-03-04", desktop: 510, mobile: 548 },
  { date: "2026-03-05", desktop: 545, mobile: 492 },
  { date: "2026-03-06", desktop: 498, mobile: 518 },
  { date: "2026-03-07", desktop: 528, mobile: 535 },
  { date: "2026-03-08", desktop: 562, mobile: 508 },
  { date: "2026-03-09", desktop: 492, mobile: 522 },
  { date: "2026-03-10", desktop: 538, mobile: 540 },
  { date: "2026-03-11", desktop: 515, mobile: 495 },
  { date: "2026-03-12", desktop: 550, mobile: 528 },
  { date: "2026-03-13", desktop: 485, mobile: 512 },
  { date: "2026-03-14", desktop: 532, mobile: 545 },
  { date: "2026-03-15", desktop: 558, mobile: 498 },
  { date: "2026-03-16", desktop: 505, mobile: 525 },
  { date: "2026-03-17", desktop: 520, mobile: 538 },
  { date: "2026-03-18", desktop: 542, mobile: 510 },
];

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

// Deterministic date format (no Date/toLocaleString to avoid hydration mismatch)
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function formatChartDate(dateStr: string) {
  const [, m, d] = dateStr.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}`;
}
function formatChartDateLong(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}

// Static totals for overlay (avoids hydration mismatch; must match chartData sum)
const DESKTOP_TOTAL = 13746;
const MOBILE_TOTAL = 13580;

export function RevenueChart() {
  return (
    <Card className="rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur transition-all duration-200">
      <CardHeader className="space-y-2 p-4 pb-2 sm:p-5 sm:pb-2">
        <CardTitle className="text-lg font-semibold">Revenue Chart</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Last 28 days</CardDescription>
      </CardHeader>
      <CardContent className="relative space-y-3 p-4 pt-0 sm:p-5 sm:pt-0">
        {/* Overlay stats box top-right inside chart */}
        <div className="absolute right-4 top-4 z-10 flex gap-4 rounded-lg border border-border/50 bg-muted/30 px-4 py-2 shadow-sm">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Desktop</p>
            <p className="text-2xl font-bold tabular-nums tracking-tight">{DESKTOP_TOTAL.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Mobile</p>
            <p className="text-2xl font-bold tabular-nums tracking-tight">{MOBILE_TOTAL.toLocaleString()}</p>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ChartContainer
            config={chartConfig}
            className="h-full w-full [&_.recharts-cartesian-grid_line]:stroke-muted-foreground/20 [&_.recharts-cartesian-axis-tick_text]:text-xs"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{ left: 12, right: 12, top: 8, bottom: 8 }}
            >
              <CartesianGrid vertical={false} strokeOpacity={0.25} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                minTickGap={32}
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => formatChartDate(String(v))}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    labelFormatter={(v) => formatChartDateLong(String(v))}
                  />
                }
              />
              <Bar dataKey="desktop" fill="#a1a1aa" radius={[4, 4, 0, 0]} barSize={6} />
              <Bar dataKey="mobile" fill="#a1a1aa" fillOpacity={0.7} radius={[4, 4, 0, 0]} barSize={6} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
