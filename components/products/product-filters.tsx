"use client";

import type { Table } from "@tanstack/react-table";
import { Filter, SlidersHorizontal } from "lucide-react";

import type { Product } from "./product-columns";
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
type ProductTable = Table<Product>;

interface ProductFiltersProps {
  table: ProductTable;
}

const STATUS_OPTIONS = [
  "Active",
  "Inactive",
  "Out of Stock",
  "Closed For Sale",
] as const;

const CATEGORY_OPTIONS = [
  "Beauty",
  "Technology",
  "Toys",
  "Food",
  "Home Appliances",
] as const;

const PRICE_OPTIONS = [
  "₹100–₹200",
  "₹200–₹300",
  "₹300–₹400",
  "₹400–₹500",
] as const;

export function ProductFilters({ table }: ProductFiltersProps) {
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
            placeholder="Search products"
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-8"
          />
          <Filter className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9">
              Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9">
              Category
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {CATEGORY_OPTIONS.map((category) => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={
                  (table.getColumn("category")?.getFilterValue() as string) ===
                  category
                }
                onCheckedChange={(checked) =>
                  table
                    .getColumn("category")
                    ?.setFilterValue(checked ? category : undefined)
                }
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-9">
              Price
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Price range</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {PRICE_OPTIONS.map((range) => (
              <DropdownMenuCheckboxItem
                key={range}
                checked={
                  (table.getColumn("price")?.getFilterValue() as string) ===
                  range
                }
                onCheckedChange={(checked) =>
                  table
                    .getColumn("price")
                    ?.setFilterValue(checked ? range : undefined)
                }
              >
                {range}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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

