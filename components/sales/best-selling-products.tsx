"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
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
    <Card className="rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur transition-all duration-200">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4 sm:p-5">
        <div className="space-y-2">
          <CardTitle className="text-lg font-semibold">Best Selling Product</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">Top-Selling Products at a Glance</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 transition-all duration-200">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3 p-4 pt-0 sm:p-5 sm:pt-0">
        <ul className="space-y-2">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-border/60 p-3 transition-all duration-200 hover:bg-muted/30"
            >
              <div className="relative size-10 shrink-0 overflow-hidden rounded-md bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{product.name}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-muted-foreground">
                {product.sold} items sold
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
