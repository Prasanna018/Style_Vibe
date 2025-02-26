import ProductGrid from "@/components/product-grid"
import { womenProducts } from "@/lib/products"

export default function WomenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Women's Collection</h1>
      <ProductGrid products={womenProducts} />
    </div>
  )
}

