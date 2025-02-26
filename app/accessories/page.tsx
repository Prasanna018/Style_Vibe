import ProductGrid from "@/components/product-grid"
import { accessoryProducts } from "@/lib/products"

export default function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Accessories</h1>
      <ProductGrid products={accessoryProducts} />
    </div>
  )
}

