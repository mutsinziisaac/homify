import Link from "next/link";
import { Home, Menu, UserCircle, Building, Key } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">Homify</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/rentals"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/land"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Land
              </Link>
            </li>
            <li>
              <Link
                href="/commercial"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link
                href="/manage-properties"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Manage Properties
              </Link>
            </li>
            <li>
              <Link
                href="/manage-rentals"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Manage Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/manage-properties">
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Building className="h-6 w-6" />
            </Button>
          </Link>
          <Link href="/manage-rentals">
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Key className="h-6 w-6" />
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center space-x-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            >
              <UserCircle className="h-5 w-5" />
              <span>Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
