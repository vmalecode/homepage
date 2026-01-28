"use client"
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
import { Menu, X } from "lucide-react"
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
import { useState } from "react"
import { useRouter } from "next/compat/router"


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const handleNavigate = (href: string) => {
    console.log("Hi")
    setOpen(false)
    router.push(href)
  }
  return (
    <nav className="sticky top-0  z-50 border-b bg-background/40 backdrop-blur">
      <div className="flex h-15 items-center px-4 justify-between">

        {/* Desktop title */}
        <div className="hidden md:block font-bold">
          Aaron Van Der Male
        </div>
        <Dialog onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="md:hidden">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </DialogTrigger>
          <div className="font-bold md:hidden truncate">Aaron Van Der Male</div>
          <DialogContent className="bg-background/60 backdrop-blur ">
            <ul className="text-3xl space-y-1 text-primary">
              <li><DialogTitle className="my-0 text-sm text-primary/50">Menu</DialogTitle></li>
              <li><button onClick={() => handleNavigate("/blog")}>Blog</button></li>
              <DialogClose asChild>
                <li><Link href={"/blog"}>Blog????</Link ></li>
              </DialogClose>
            </ul>
          </DialogContent >
        </Dialog >

        {/* Desktop nav */}
        < ul className="hidden md:flex gap-2" >
          <Link href="/"><Button variant="link">Home</Button></Link>
          <Link href="/"><Button variant="link">About</Button></Link>
          <Link href="/blog"><Button variant="link">Blog</Button></Link>
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
