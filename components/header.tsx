import Link from "next/link"
import { ShoppingBag, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              StyleVibe
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/women" className="text-sm font-medium hover:text-primary">
              Women
            </Link>
            <Link href="/men" className="text-sm font-medium hover:text-primary">
              Men
            </Link>
            <Link href="/accessories" className="text-sm font-medium hover:text-primary">
              Accessories
            </Link>
            <Link href="/shoes" className="text-sm font-medium hover:text-primary">
              Shoes
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

