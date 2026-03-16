"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
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

import { orderColumns, type Order } from "./order-columns";
import { OrderFilters } from "./order-filters";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const DUMMY_ORDERS: Order[] = [
  {
    id: "ord_1",
    orderNumber: "#12342",
    product: "Wireless Headphones",
    image: "https://placehold.co/40x40",
    price: 200,
    customerName: "Liam Johnson",
    customerEmail: "liam@example.com",
    date: "Jun 23, 2023",
    type: "Sale",
    status: "Completed",
  },
  {
    id: "ord_2",
    orderNumber: "#12343",
    product: "Bluetooth Speaker",
    image: "https://placehold.co/40x40",
    price: 150,
    customerName: "Olivia Brown",
    customerEmail: "olivia@example.com",
    date: "Jun 25, 2023",
    type: "Sale",
    status: "Pending",
  },
  {
    id: "ord_3",
    orderNumber: "#12344",
    product: "Smartwatch",
    image: "https://placehold.co/40x40",
    price: 250,
    customerName: "Noah Smith",
    customerEmail: "noah@example.com",
    date: "Jul 01, 2023",
    type: "Sale",
    status: "Shipped",
  },
  {
    id: "ord_4",
    orderNumber: "#12345",
    product: "Laptop Stand",
    image: "https://placehold.co/40x40",
    price: 320,
    customerName: "Emma Davis",
    customerEmail: "emma@example.com",
    date: "Jul 11, 2023",
    type: "Sale",
    status: "Delivered",
  },
  {
    id: "ord_5",
    orderNumber: "#12346",
    product: "Portable Charger",
    image: "https://placehold.co/40x40",
    price: 80,
    customerName: "James Wilson",
    customerEmail: "james@example.com",
    date: "Jul 19, 2023",
    type: "Sale",
    status: "Completed",
  },
  {
    id: "ord_6",
    orderNumber: "#12347",
    product: "USB Hub",
    image: "https://placehold.co/40x40",
    price: 60,
    customerName: "Sophia Miller",
    customerEmail: "sophia@example.com",
    date: "Aug 03, 2023",
    type: "Return",
    status: "Pending",
  },
  {
    id: "ord_7",
    orderNumber: "#12348",
    product: "4K Monitor",
    image: "https://placehold.co/40x40",
    price: 520,
    customerName: "Benjamin Clark",
    customerEmail: "benjamin@example.com",
    date: "Aug 05, 2023",
    type: "Sale",
    status: "Shipped",
  },
  {
    id: "ord_8",
    orderNumber: "#12349",
    product: "Mechanical Keyboard",
    image: "https://placehold.co/40x40",
    price: 180,
    customerName: "Mia Martinez",
    customerEmail: "mia@example.com",
    date: "Aug 10, 2023",
    type: "Sale",
    status: "Delivered",
  },
  {
    id: "ord_9",
    orderNumber: "#12350",
    product: "Wireless Mouse",
    image: "https://placehold.co/40x40",
    price: 40,
    customerName: "Alexander Lopez",
    customerEmail: "alexander@example.com",
    date: "Aug 14, 2023",
    type: "Sale",
    status: "Completed",
  },
  {
    id: "ord_10",
    orderNumber: "#12351",
    product: "Tablet",
    image: "https://placehold.co/40x40",
    price: 380,
    customerName: "Charlotte Lee",
    customerEmail: "charlotte@example.com",
    date: "Aug 20, 2023",
    type: "Return",
    status: "Pending",
  },
];

export function OrdersTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const data = useMemo(() => DUMMY_ORDERS, []);
  const router = useRouter();

  const table = useReactTable({
    data,
    columns: orderColumns,
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
      <OrderFilters table={table} />

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
                  className="cursor-pointer"
                  onClick={() => router.push(`/orders/${row.original.id}`)}
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
                  No orders found.
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

