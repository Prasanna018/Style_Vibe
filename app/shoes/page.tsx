import ProductGrid from "@/components/product-grid"
import { shoeProducts } from "@/lib/products"

export default function ShoesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shoes Collection</h1>
      <ProductGrid products={shoeProducts} />
    </div>
  )
}

