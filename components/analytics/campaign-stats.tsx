"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const METRICS = [
  { label: "Emails", count: "12,346", change: "+12.3%" },
  { label: "Opened", count: "8,234", change: "+8.1%" },
  { label: "Clicked", count: "2,156", change: "+5.2%" },
  { label: "Subscribe", count: "1,890", change: "+3.4%" },
  { label: "Complaints", count: "42", change: "-1.2%" },
  { label: "Unsubscribe", count: "128", change: "+0.8%" },
];

export function CampaignStats() {
  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Monthly Campaign State
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {METRICS.map((m) => (
            <li
              key={m.label}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2"
            >
              <span className="text-sm font-medium">{m.label}</span>
              <div className="flex items-center gap-3 text-sm">
                <span className="font-semibold tabular-nums">{m.count}</span>
                <span
                  className={
                    m.change.startsWith("-")
                      ? "text-destructive"
                      : "text-emerald-600 dark:text-emerald-400"
                  }
                >
                  {m.change}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
