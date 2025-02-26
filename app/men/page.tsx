import ProductGrid from "@/components/product-grid"
import { menProducts } from "@/lib/products"

export default function MenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Men's Collection</h1>
      <ProductGrid products={menProducts} />
    </div>
  )
}

