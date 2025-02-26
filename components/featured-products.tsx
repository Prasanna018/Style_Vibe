import ProductGrid from "@/components/product-grid"
import { womenProducts, menProducts, accessoryProducts, shoeProducts } from "@/lib/products"

const FeaturedProducts = () => {
  const featuredProducts = [womenProducts[0], menProducts[0], accessoryProducts[0], shoeProducts[0]]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  )
}

export default FeaturedProducts

