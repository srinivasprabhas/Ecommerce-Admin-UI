"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="rounded-xl border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold tracking-tight">₹30,230</p>
          <p className="mt-1 text-xs text-muted-foreground">+20.1%</p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Number of Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold tracking-tight">982</p>
          <p className="mt-1 text-xs text-muted-foreground">+5.02%</p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Affiliate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold tracking-tight">₹4,530</p>
          <p className="mt-1 text-xs text-muted-foreground">+3.1%</p>
        </CardContent>
      </Card>

      <Card className="rounded-xl border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Discounts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold tracking-tight">₹2,230</p>
          <p className="mt-1 text-xs text-muted-foreground">-3.58%</p>
        </CardContent>
      </Card>
    </div>
  );
}

