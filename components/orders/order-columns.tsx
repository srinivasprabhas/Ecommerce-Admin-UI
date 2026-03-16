"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type OrderStatus = "Pending" | "Completed" | "Shipped" | "Delivered";

export type Order = {
  id: string;
  orderNumber: string;
  product: string;
  image: string;
  price: number;
  customerName: string;
  customerEmail: string;
  date: string;
  type: "Sale" | "Return";
  status: OrderStatus;
};

function statusClass(status: OrderStatus) {
  switch (status) {
    case "Pending":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400";
    case "Completed":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    case "Shipped":
      return "bg-muted text-muted-foreground";
    case "Delivered":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400";
    default:
      return "";
  }
}

export const orderColumns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderNumber",
    header: "#",
    cell: ({ row }) => <span>{row.original.orderNumber}</span>,
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <div className="flex items-center gap-3">
          <Avatar className="rounded-md">
            <AvatarImage src={order.image} alt={order.product} />
            <AvatarFallback className="rounded-md">
              {order.product.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium">{order.product}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue<number>("price");
      return <span>${price.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <div className="flex flex-col">
          <span className="text-sm font-medium">{order.customerName}</span>
          <span className="text-xs text-muted-foreground">
            {order.customerEmail}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue<OrderStatus>("status");
      return (
        <Badge
          variant="outline"
          className={`px-2 py-0.5 text-xs border-none ${statusClass(status)}`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="h-7 w-7"
              aria-label="Open row actions"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit order</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard?.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
];

