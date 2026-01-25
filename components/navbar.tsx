import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./theme-toggle"

const NavBar = () => {
  return (
    <nav>
      <div className="lg:hidden  h-4 flex whitespace-nowrap justify-center items-center mt-2">
        Aaron Van Der Male
      </div>
      <div className='lg:h-18 h-10 bg-background/60 sticky top-0 border-b px-4
      backdrop-blur items-center flex justify-between'>
        <div className="font-bold w-1/4 hidden lg:block">
          Aaron Van Der Male
        </div>
        <div className="lg:hidden flex-none flex justify-end h-2 w-1/10" > </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="">
            <Link href={"/"}><Button variant="link">Portfolio</Button></Link>
          </li>
          <li className="">
            <Link href={"/"}><Button variant="link">Software</Button></Link>
          </li>
          <li className="hidden sm:block">
            <Link href={"/"}><Button variant="link">Home</Button></Link>
          </li>
          <li className="hidden lg:block">
            <Link href={"/"}><Button variant="link">About</Button></Link>
          </li>
          <li className="hidden lg:block">
            <Link href={"/"}><Button variant="link">Blog</Button></Link>
          </li>
          <li className="hidden lg:block">
            <Link href={"/"}><Button variant="link">Github</Button></Link>
          </li>
        </ul>
        <div className="flex w-1/10 flex-none justify-end">
          <div className="hidden sm:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default NavBar
