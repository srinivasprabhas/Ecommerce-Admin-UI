"use client";

import { useMemo, useState } from "react";
import type {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { productColumns, type Product } from "./product-columns";
import { ProductFilters } from "./product-filters";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: "prd_1",
    name: "Wireless Headphones",
    image: "https://placehold.co/40x40",
    price: 2499,
    category: "Technology",
    stock: 120,
    sku: "WH-001",
    rating: 4.5,
    status: "Active",
  },
  {
    id: "prd_2",
    name: "Organic Face Cream",
    image: "https://placehold.co/40x40",
    price: 899,
    category: "Beauty",
    stock: 54,
    sku: "OF-201",
    rating: 4.2,
    status: "Active",
  },
  {
    id: "prd_3",
    name: "Kids Building Blocks",
    image: "https://placehold.co/40x40",
    price: 1299,
    category: "Toys",
    stock: 0,
    sku: "KB-332",
    rating: 4.8,
    status: "Out of Stock",
  },
  {
    id: "prd_4",
    name: "Smart Watch Pro",
    image: "https://placehold.co/40x40",
    price: 5599,
    category: "Technology",
    stock: 32,
    sku: "SW-990",
    rating: 4.6,
    status: "Active",
  },
  {
    id: "prd_5",
    name: "Gourmet Snack Box",
    image: "https://placehold.co/40x40",
    price: 1499,
    category: "Food",
    stock: 210,
    sku: "GS-120",
    rating: 4.1,
    status: "Active",
  },
  {
    id: "prd_6",
    name: "Air Fryer XL",
    image: "https://placehold.co/40x40",
    price: 7499,
    category: "Home Appliances",
    stock: 18,
    sku: "AF-777",
    rating: 4.4,
    status: "Inactive",
  },
  {
    id: "prd_7",
    name: "Deluxe Coffee Maker",
    image: "https://placehold.co/40x40",
    price: 3299,
    category: "Home Appliances",
    stock: 64,
    sku: "CM-531",
    rating: 4.0,
    status: "Active",
  },
  {
    id: "prd_8",
    name: "Vitamin Gummies",
    image: "https://placehold.co/40x40",
    price: 499,
    category: "Food",
    stock: 0,
    sku: "VG-008",
    rating: 3.9,
    status: "Closed For Sale",
  },
  {
    id: "prd_9",
    name: "Luxury Perfume Set",
    image: "https://placehold.co/40x40",
    price: 8999,
    category: "Beauty",
    stock: 5,
    sku: "LP-555",
    rating: 4.7,
    status: "Active",
  },
  {
    id: "prd_10",
    name: "Remote Control Car",
    image: "https://placehold.co/40x40",
    price: 2199,
    category: "Toys",
    stock: 42,
    sku: "RC-404",
    rating: 4.3,
    status: "Active",
  },
  {
    id: "prd_11",
    name: "Bluetooth Speaker",
    image: "https://placehold.co/40x40",
    price: 1899,
    category: "Technology",
    stock: 97,
    sku: "BS-212",
    rating: 4.1,
    status: "Inactive",
  },
  {
    id: "prd_12",
    name: "Non-stick Cookware Set",
    image: "https://placehold.co/40x40",
    price: 4599,
    category: "Home Appliances",
    stock: 23,
    sku: "CS-303",
    rating: 4.5,
    status: "Active",
  },
];

export function ProductTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const data = useMemo(() => DUMMY_PRODUCTS, []);

  const table = useReactTable({
    data,
    columns: productColumns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
    enableRowSelection: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4 rounded-xl border bg-card p-4">
      <ProductFilters table={table} />

      <div className="rounded-lg border border-border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-muted/40">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="text-xs">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

