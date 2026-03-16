"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type VariantRow = {
  id: number;
  option: string;
  value: string;
  price: string;
};

export default function AddProductPage() {
  const [variants, setVariants] = useState<VariantRow[]>([
    { id: 1, option: "", value: "", price: "" },
    { id: 2, option: "", value: "", price: "" },
  ]);

  const handleAddVariant = () => {
    setVariants((rows) => [
      ...rows,
      { id: rows.length + 1, option: "", value: "", price: "" },
    ]);
  };

  const handlePublish = () => {
    // Bonus: log a minimal snapshot of form state.
    console.log("Publish product (dummy payload)", {
      variants,
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon-sm">
            <Link href="/products/list">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to Products</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Add Products
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm">
            Discard
          </Button>
          <Button variant="outline" size="sm">
            Save Draft
          </Button>
          <Button size="sm" onClick={handlePublish}>
            Publish
          </Button>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        {/* Left column */}
        <div className="space-y-6">
          {/* Product Details */}
          <Card className="rounded-xl border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Product Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="name">
                  Name
                </label>
                <Input id="name" placeholder="Enter product name" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="sku">
                    SKU
                  </label>
                  <Input id="sku" placeholder="SKU-001" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium" htmlFor="barcode">
                    Barcode
                  </label>
                  <Input id="barcode" placeholder="Barcode" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="description">
                  Description
                </label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Write a short description for this product..."
                />
                <p className="text-xs text-muted-foreground">
                  Set a description to the product for better visibility.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Product Images */}
          <Card className="rounded-xl border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold">
                Product Images
              </CardTitle>
              <Button variant="link" size="sm" className="px-0 text-xs">
                Add media from URL
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/40 px-6 py-8 text-center">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <div className="space-y-1 text-sm">
                  <p className="font-medium">Drop your images here</p>
                  <p className="text-xs text-muted-foreground">
                    PNG or JPG (max. 5MB)
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Select images
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Variants */}
          <Card className="rounded-xl border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Variants
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-[1.2fr_1.2fr_1fr] gap-3 text-xs font-medium text-muted-foreground">
                <span>Options</span>
                <span>Value</span>
                <span>Price</span>
              </div>

              <div className="space-y-2">
                {variants.map((variant) => (
                  <div
                    key={variant.id}
                    className="grid grid-cols-[1.2fr_1.2fr_1fr] gap-3"
                  >
                    <Select
                      value={variant.option}
                      onValueChange={(value) =>
                        setVariants((rows) =>
                          rows.map((row) =>
                            row.id === variant.id ? { ...row, option: value } : row
                          )
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="size">Size</SelectItem>
                        <SelectItem value="color">Color</SelectItem>
                        <SelectItem value="material">Material</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      placeholder="Variant value"
                      value={variant.value}
                      onChange={(e) =>
                        setVariants((rows) =>
                          rows.map((row) =>
                            row.id === variant.id
                              ? { ...row, value: e.target.value }
                              : row
                          )
                        )
                      }
                    />

                    <Input
                      placeholder="$0.00"
                      value={variant.price}
                      onChange={(e) =>
                        setVariants((rows) =>
                          rows.map((row) =>
                            row.id === variant.id
                              ? { ...row, price: e.target.value }
                              : row
                          )
                        )
                      }
                    />
                  </div>
                ))}
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 flex items-center gap-2"
                onClick={handleAddVariant}
              >
                <Plus className="h-4 w-4" />
                Add Variant
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Pricing */}
          <Card className="rounded-xl border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Pricing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="base-price">
                    Base Price
                  </label>
                  <Input id="base-price" placeholder="$0.00" />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    htmlFor="discounted-price"
                  >
                    Discounted Price
                  </label>
                  <Input id="discounted-price" placeholder="$0.00" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="charge-tax" />
                <label
                  htmlFor="charge-tax"
                  className="text-sm text-muted-foreground"
                >
                  Charge tax on this product
                </label>
              </div>

              <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2">
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">In stock</p>
                  <p className="text-xs text-muted-foreground">
                    Toggle to mark this product as in stock.
                  </p>
                </div>
                <Switch id="in-stock" />
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          <Card className="rounded-xl border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Select defaultValue="draft">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500" />
                      Draft
                    </span>
                  </SelectItem>
                  <SelectItem value="active">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Active
                    </span>
                  </SelectItem>
                  <SelectItem value="archived">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      Archived
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card className="rounded-xl border">
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="beauty">Beauty</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="toys">Toys</SelectItem>
                      <SelectItem value="home-appliances">
                        Home Appliances
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon-sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sub category</label>
                <div className="flex items-center gap-2">
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select a sub category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audio">Audio</SelectItem>
                      <SelectItem value="wearables">Wearables</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="kitchen">Kitchen</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon-sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

