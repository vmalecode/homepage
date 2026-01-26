import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./theme-toggle"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Menu } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MobileNav } from "./mobile-nav"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const NavBar = () => {
  return (
    <nav className="sticky top-0  z-50 border-b bg-background/40 backdrop-blur">
      <div className="flex h-15 items-center px-4 justify-between">

        {/* Desktop title */}
        <div className="hidden lg:block font-bold">
          Aaron Van Der Male
        </div>
        <Dialog >
          <DialogTrigger><Menu /></DialogTrigger>
          <DialogContent className="bg-background/60 backdrop-blur ">
            <div className="border-1 ">
              <ul className="text-3xl space-y-1 ">
                <li><DialogTitle className="my-0 text-sm text-secondary">Menu</DialogTitle></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Blog</Link></li>
                <li><Link href="/">Github</Link></li>
                <li><Link href="/">Portfolio</Link></li>
                <li><Link href="/">Software</Link></li>
              </ul>
            </div >
          </DialogContent >
        </Dialog >

        {/* Desktop nav */}
        < ul className="hidden md:flex gap-2" >
          <Link href="/"><Button variant="link">Home</Button></Link>
          <Link href="/"><Button variant="link">About</Button></Link>
          <Link href="/"><Button variant="link">Blog</Button></Link>
          <Link href="/"><Button variant="link">Github</Button></Link>
          <Link href="/"><Button variant="link">Portfolio</Button></Link>
          <Link href="/"><Button variant="link">Software</Button></Link>
        </ul >

        <ModeToggle />
      </div >
    </nav >
  )
}


export default NavBar
