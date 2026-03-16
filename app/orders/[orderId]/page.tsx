import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Edit, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type OrderDetailParams = {
  params: {
    orderId: string;
  };
};

export const metadata: Metadata = {
  title: "Order Detail",
};

const ORDER_ID = "ORD-12345";

const ORDER_ITEMS = [
  {
    name: "Wireless Headphones",
    image: "https://placehold.co/40x40",
    quantity: 2,
    price: 25.99,
    total: 51.98,
  },
  {
    name: "Bluetooth Speaker",
    image: "https://placehold.co/40x40",
    quantity: 1,
    price: 49.99,
    total: 49.99,
  },
];

export default function OrderDetailPage({ params }: OrderDetailParams) {
  // In a real app, you'd fetch by params.orderId.
  const orderId = params.orderId || ORDER_ID;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" size="sm">
          <Link href="/orders/list" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Orders
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      </div>

      {/* Order info cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Order info + customer */}
        <Card className="rounded-xl border">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Order {orderId}
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Placed on 2025-04-15
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Customer
              </p>
              <div className="mt-1 space-y-1">
                <p className="font-medium">Alice Johnson</p>
                <p className="text-xs text-muted-foreground">
                  alice@example.com
                </p>
                <p className="text-xs text-muted-foreground">
                  123 Main St, Anytown, AN 12345
                </p>
              </div>
            </div>

            <div className="rounded-lg border bg-muted/40 p-3">
              <p className="text-xs font-medium text-muted-foreground">
                Payment Method
              </p>
              <p className="mt-1 text-sm">
                Visa ending in <span className="font-semibold">**** 1234</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Right: Order summary */}
        <Card className="rounded-xl border">
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">$101.97</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">$10.00</span>
            </div>
            <div className="flex items-center justify-between border-t pt-2 mt-2">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-sm font-semibold">$111.97</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Delivery status timeline */}
      <Card className="rounded-xl border">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Delivery Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span className="text-foreground">Processing</span>
            <span className="text-foreground">Shipped</span>
            <span>Out for Delivery</span>
            <span>Delivered</span>
          </div>
          <div className="relative h-2 rounded-full bg-muted">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-primary" />
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="w-1/4 text-left text-foreground">Completed</span>
            <span className="w-1/4 text-center text-foreground">Completed</span>
            <span className="w-1/4 text-center">Pending</span>
            <span className="w-1/4 text-right">Pending</span>
          </div>

          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none">
              Shipped
            </Badge>
            <span className="text-xs text-muted-foreground">
              on December 23, 2024
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Order items */}
      <Card className="rounded-xl border">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Order Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40">
                <TableHead>Product</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ORDER_ITEMS.map((item) => (
                <TableRow key={item.name}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 w-10 rounded-md border border-border object-cover"
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>${item.total.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

