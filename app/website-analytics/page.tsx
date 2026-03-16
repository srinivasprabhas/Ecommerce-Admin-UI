import { CalendarRange, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { EarningChart } from "@/components/analytics/earning-chart";
import { AnalyticsDonutChart } from "@/components/analytics/analytics-donut-chart";
import { AnalyticsAreaChart } from "@/components/analytics/area-chart";
import { CountrySales } from "@/components/analytics/country-sales";
import { CampaignStats } from "@/components/analytics/campaign-stats";
import { TotalEarningChart } from "@/components/analytics/total-earning-chart";

export default function WebsiteAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Website Analytics</h1>
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

      {/* Top row: 4 stat cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Daily active users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">3,450</p>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">+12.1%</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weekly sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">1,342</p>
            <p className="mt-1 text-xs text-destructive">-9.8%</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">5.2 min</p>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">+7.7%</p>
          </CardContent>
        </Card>
        <Card className="rounded-xl border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold tracking-tight">2.8%</p>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">+4.3%</p>
          </CardContent>
        </Card>
      </div>

      {/* Second row: Earning Reports (bar) | Donut */}
      <div className="grid gap-6 md:grid-cols-2">
        <EarningChart />
        <AnalyticsDonutChart />
      </div>

      {/* Third row: Website Analytics stats | Average Daily Sales (area) | Sales Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="rounded-xl border">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Website Analytics</CardTitle>
            <p className="text-sm text-muted-foreground">Total 28.5% Conversion Rate</p>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Direct</span>
              <span className="font-medium">432 · Sessions 29%</span>
            </div>
            <div className="flex justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Leads</span>
              <span className="font-medium">1.6K</span>
            </div>
            <div className="flex justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Organic</span>
              <span className="font-medium">216 · Page Views 2.3K</span>
            </div>
            <div className="flex justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-sm">
              <span className="text-muted-foreground">Conversions</span>
              <span className="font-medium">8%</span>
            </div>
          </CardContent>
        </Card>
        <AnalyticsAreaChart />
        <Card className="rounded-xl border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-semibold">Sales Overview</CardTitle>
            <p className="text-2xl font-semibold">$42.5K</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span>Orders</span>
                <span className="font-medium">62.2%</span>
              </div>
              <Progress value={62.2} className="mt-1 h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span>Visits</span>
                <span className="font-medium">25.5%</span>
              </div>
              <Progress value={25.5} className="mt-1 h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fourth row: Sales by Countries | Total Earning (stacked bar) | Campaign State */}
      <div className="grid gap-6 lg:grid-cols-3">
        <CountrySales />
        <TotalEarningChart />
        <CampaignStats />
      </div>
    </div>
  );
}
