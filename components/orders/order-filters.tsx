"use client";

import type { Table } from "@tanstack/react-table";
import { Filter, SlidersHorizontal } from "lucide-react";

import type { Order } from "./order-columns";
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

type OrdersTable = Table<Order>;

interface OrderFiltersProps {
  table: OrdersTable;
}

const STATUS_OPTIONS = ["Pending", "Completed", "Shipped", "Delivered"] as const;
const TYPE_OPTIONS = ["Sale", "Return"] as const;

export function OrderFilters({ table }: OrderFiltersProps) {
  const state = table.getState();
  const globalFilter =
    "globalFilter" in state ? (state as { globalFilter: string }).globalFilter : "";

  const setGlobalFilter = (value: string) => {
    table.setGlobalFilter?.(value);
  };

  const toggleColumnVisibility = (id: string) => {
    const column = table.getColumn(id);
    if (!column) return;
    column.toggleVisibility(!column.getIsVisible());
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 flex-wrap items-center gap-3">
        <div className="relative w-full max-w-xs">
          <Input
            placeholder="Search orders..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-8"
          />
          <Filter className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>

        {/* Status filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9">
              Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {STATUS_OPTIONS.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={
                  (table.getColumn("status")?.getFilterValue() as string) ===
                  status
                }
                onCheckedChange={(checked) =>
                  table
                    .getColumn("status")
                    ?.setFilterValue(checked ? status : undefined)
                }
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Type filter (acts like category for orders) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9">
              Type
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Type</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {TYPE_OPTIONS.map((type) => (
              <DropdownMenuCheckboxItem
                key={type}
                checked={
                  (table.getColumn("type")?.getFilterValue() as string) === type
                }
                onCheckedChange={(checked) =>
                  table
                    .getColumn("type")
                    ?.setFilterValue(checked ? type : undefined)
                }
              >
                {type}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Columns button on the right */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="ml-auto flex items-center gap-2 h-9"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {table
            .getAllLeafColumns()
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={() => toggleColumnVisibility(column.id)}
              >
                {column.columnDef.header as string}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

