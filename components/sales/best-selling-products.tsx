"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PRODUCTS = [
  { name: "Sports Shoes", sold: 316, image: "https://placehold.co/40x40" },
  { name: "Black T-Shirt", sold: 274, image: "https://placehold.co/40x40" },
  { name: "Jeans", sold: 195, image: "https://placehold.co/40x40" },
  { name: "Red Sneakers", sold: 402, image: "https://placehold.co/40x40" },
  { name: "Red Scarf", sold: 280, image: "https://placehold.co/40x40" },
  { name: "Kitchen Accessory", sold: 150, image: "https://placehold.co/40x40" },
];

export function BestSellingProducts() {
  return (
    <Card className="rounded-xl border">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Best Selling Product</CardTitle>
        <CardDescription>Top-Selling Products at a Glance</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/30 px-3 py-2"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  {product.sold} items sold
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
