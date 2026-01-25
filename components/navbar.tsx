import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { MobileNav } from "./mobile-nav"

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/60 backdrop-blur">
      <div className="flex h-14 items-center px-4 justify-between">

        {/* Mobile: hamburger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop title */}
        <div className="hidden lg:block font-bold">
          Aaron Van Der Male
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-2">
          <Link href="/"><Button variant="link">Home</Button></Link>
          <Link href="/"><Button variant="link">About</Button></Link>
          <Link href="/"><Button variant="link">Blog</Button></Link>
          <Link href="/"><Button variant="link">Github</Button></Link>
          <Link href="/"><Button variant="link">Portfolio</Button></Link>
          <Link href="/"><Button variant="link">Software</Button></Link>
        </ul>

        <ModeToggle />
      </div>
    </nav>
  )
}


export default NavBar
