import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductStats } from "@/components/products/product-stats";
import { ProductTable } from "@/components/products/product-table";

export default function ProductListPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Products</h1>
        <Button asChild>
          <Link href="/products/create" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      {/* Stats row */}
      <ProductStats />

      {/* Product table + filters */}
      <ProductTable />
    </div>
  );
}

