"use client";

import { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type OrderStatus = "New Order" | "In Progress" | "On Hold" | "Completed";

const STATUS_STYLE: Record<OrderStatus, string> = {
  "New Order": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-0",
  "In Progress": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-0",
  "On Hold": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-0",
  Completed: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0",
};

const ORDERS = [
  { id: "1083", customer: "Marvin Dekidis", qty: 2, amount: 34.5, payment: "E-Wallet", status: "New Order" as OrderStatus },
  { id: "1082", customer: "Carter Lipshitz", qty: 6, amount: 60.5, payment: "Bank Transfer", status: "In Progress" as OrderStatus },
  { id: "1081", customer: "Addison Philips", qty: 3, amount: 47.5, payment: "E-Wallet", status: "New Order" as OrderStatus },
  { id: "1079", customer: "Craig Siphron", qty: 15, amount: 89.8, payment: "Bank Transfer", status: "On Hold" as OrderStatus },
  { id: "1078", customer: "Emma Johnson", qty: 4, amount: 120.75, payment: "Credit Card", status: "Completed" as OrderStatus },
];

const COLUMNS = ["ID", "Customer Name", "Qty Items", "Amount", "Payment Method", "Status"] as const;

export function SalesTable() {
  const [filter, setFilter] = useState("");
  const [visibleCols, setVisibleCols] = useState<Set<string>>(new Set(COLUMNS));

  const filtered = ORDERS.filter(
    (o) =>
      o.id.includes(filter) ||
      o.customer.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Orders</CardTitle>
        <CardDescription>Recent orders with filters</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-xs">
            <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Filter orders"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {COLUMNS.map((col) => (
                  <DropdownMenuCheckboxItem
                    key={col}
                    checked={visibleCols.has(col)}
                    onCheckedChange={(checked) => {
                      setVisibleCols((prev) => {
                        const next = new Set(prev);
                        if (checked) next.add(col);
                        else next.delete(col);
                        return next;
                      });
                    }}
                  >
                    {col}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" className="h-9">
              Export
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                {COLUMNS.filter((c) => visibleCols.has(c)).map((col) => (
                  <TableHead key={col}>{col}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row) => (
                <TableRow key={row.id}>
                  {visibleCols.has("ID") && <TableCell className="font-medium">{row.id}</TableCell>}
                  {visibleCols.has("Customer Name") && <TableCell>{row.customer}</TableCell>}
                  {visibleCols.has("Qty Items") && <TableCell>{row.qty} items</TableCell>}
                  {visibleCols.has("Amount") && <TableCell>${row.amount.toFixed(2)}</TableCell>}
                  {visibleCols.has("Payment Method") && <TableCell>{row.payment}</TableCell>}
                  {visibleCols.has("Status") && (
                    <TableCell>
                      <Badge className={cn("text-xs", STATUS_STYLE[row.status])}>
                        {row.status}
                      </Badge>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
