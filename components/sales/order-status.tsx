"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const STATUSES = [
  { label: "New Order", value: 43, change: "+0.5%", progress: 85, color: "bg-primary" },
  { label: "On Progress", value: 12, change: "-0.3%", progress: 25, color: "bg-amber-500" },
  { label: "Completed", value: 40, change: "+0.5%", progress: 78, color: "bg-emerald-500" },
  { label: "Return", value: 2, change: "-0.5%", progress: 5, color: "bg-rose-500" },
];

export function OrderStatus() {
  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Track Order Status</CardTitle>
        <CardDescription>
          Analyze growth and changes in visitor patterns
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {STATUSES.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{item.label}</span>
              <span className="tabular-nums text-muted-foreground">
                {item.value}
                <span
                  className={
                    item.change.startsWith("-")
                      ? "ml-1 text-destructive"
                      : "ml-1 text-emerald-600 dark:text-emerald-400"
                  }
                >
                  {item.change}
                </span>
              </span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
