"use client"
import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"


const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0  z-50 bg-background">
      <div className="flex h-20 items-center px-4 justify-between">

        {/* Desktop title */}
        <div className="hidden md:block font-bold">
          Aaron Van Der Male
        </div>
        <Dialog onOpenChange={setOpen}>
          <DialogTrigger className="md:hidden flex items-center text-3xl">
            {open ? <X className="h-7 w-7" /> : <Menu className="h-8 w-8" />}
            <div className="ml-2">Menu</div>
          </DialogTrigger>
          <div className="font-bold md:hidden truncate">Aaron Van Der Male</div>
          <DialogContent className="bg-background/60 backdrop-blur ">
            <ul className="text-3xl space-y-1 text-primary">
              <li><DialogTitle className="my-0 text-sm text-primary/50">Menu</DialogTitle></li>
              <li><DialogClose><Link href={"/"}>Home</Link ></DialogClose></li>
              <li><DialogClose><Link href={"/portfolio"}>Portfolio</Link ></DialogClose></li>
              <li><DialogClose><Link href={"/blogpost/about"}>About</Link ></DialogClose></li>
              <li><DialogClose><Link href={"/blog"}>Blog</Link ></DialogClose></li>
              <li><DialogClose><Link href="https://www.github.com/vmalecode" target="_blank" rel="noopener noreferrer" >Github</Link></DialogClose></li>
              <li><DialogClose><Link href="https://www.linkedin.com/in/aaronvandermale/" target="_blank" rel="noopener noreferrer" >LinkedIn</Link></DialogClose></li>
              <li><DialogClose><Link href={"/software"}>Software</Link ></DialogClose></li>
            </ul>
          </DialogContent >
        </Dialog >

        {/* Desktop nav */}
        < ul className="hidden md:flex gap-2" >
          <Link href="/"><Button variant="link">Home</Button></Link>
          <Link href="/blogpost/about"><Button variant="link">About</Button></Link>
          <Link href="/blog"><Button variant="link">Blog</Button></Link>
          <Link href="https://www.github.com/vmalecode" target="_blank" rel="noopener noreferrer"><Button variant="link">Github</Button></Link>
          <Link href="/portfolio"><Button variant="link">Portfolio</Button></Link>
          <Link href="/software"><Button variant="link">Software</Button></Link>
        </ul >

        <ModeToggle />
      </div >
    </nav >
  )
}


export default NavBar
