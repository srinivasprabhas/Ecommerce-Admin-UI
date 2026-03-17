"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const STATUSES = [
  { label: "New Order", value: 43, change: "+0.5%", positive: true, progress: 85, barColor: "bg-blue-500" },
  { label: "On Progress", value: 12, change: "-0.3%", positive: false, progress: 25, barColor: "bg-cyan-500" },
  { label: "Completed", value: 40, change: "+0.5%", positive: true, progress: 78, barColor: "bg-green-500" },
  { label: "Return", value: 2, change: "-0.5%", positive: false, progress: 5, barColor: "bg-orange-500" },
];

export function OrderStatus() {
  return (
    <Card className="rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur transition-all duration-200">
      <CardHeader className="space-y-2 p-4 sm:p-5">
        <CardTitle className="text-lg font-semibold">Track Order Status</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Analyze growth and changes in visitor patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-4 pt-0 sm:p-5 sm:pt-0">
        {/* Top row: 4 metrics in a grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATUSES.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border/50 bg-muted/30 p-4 transition-all duration-200"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight">{item.value}</p>
              <p
                className={`mt-0.5 flex items-center gap-0.5 text-xs ${
                  item.positive ? "text-green-500" : "text-red-500"
                }`}
              >
                {item.positive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                {item.change}
              </p>
            </div>
          ))}
        </div>
        {/* Progress bars: horizontal, colored */}
        <div className="space-y-4">
          {STATUSES.map((item) => (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-muted-foreground">{item.label}</span>
                <span className="tabular-nums text-muted-foreground">{item.value}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={`h-full rounded-full ${item.barColor} transition-all duration-200`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
