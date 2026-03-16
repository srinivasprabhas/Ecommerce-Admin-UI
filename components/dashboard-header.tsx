"use client";

import { Bell, Search, SunMoon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6">
      <div className="relative w-80">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-8" />
      </div>

      <div className="flex gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon">
          <SunMoon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

