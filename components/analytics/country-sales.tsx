"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const COUNTRIES = [
  { name: "United States", flag: "🇺🇸", revenue: "$12,450", change: "+12.5%" },
  { name: "Brazil", flag: "🇧🇷", revenue: "$8,230", change: "+8.2%" },
  { name: "India", flag: "🇮🇳", revenue: "$9,180", change: "-2.4%" },
  { name: "Australia", flag: "🇦🇺", revenue: "$5,670", change: "+15.1%" },
  { name: "France", flag: "🇫🇷", revenue: "$4,920", change: "+3.7%" },
  { name: "Greece", flag: "🇬🇷", revenue: "$3,240", change: "-1.2%" },
];

export function CountrySales() {
  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Sales by Countries</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {COUNTRIES.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{c.flag}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </div>
              <div className="text-right text-sm">
                <p className="font-medium">{c.revenue}</p>
                <p
                  className={
                    c.change.startsWith("-")
                      ? "text-xs text-destructive"
                      : "text-xs text-emerald-600 dark:text-emerald-400"
                  }
                >
                  {c.change}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
