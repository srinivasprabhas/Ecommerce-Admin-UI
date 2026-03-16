"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesLocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Location</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Replace this placeholder with a map or table visualization later */}
        <div className="text-sm text-muted-foreground">
          Sales by location chart will go here.
        </div>
      </CardContent>
    </Card>
  );
}

