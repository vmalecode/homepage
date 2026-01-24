import Link from "next/link"
import { Button } from "./ui/button"
import { ModeToggle } from "./theme-toggle"

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/60 sticky top-0 border-b px-8
      backdrop-blur items-center flex justify-between'>
      <div className="fond-bold text-xl w-48 flex-none">
        Aaron Van Der Male
      </div>
      <ul className="items-center flex justify-center space-x-4 grow">
        <li className="buttons px-4 space-x-2">
          <Link href={"/"}><Button variant="link">Home</Button></Link>
          <Link href={"/"}><Button variant="link">About</Button></Link>
          <Link href={"/"}><Button variant="link">Portfolio</Button></Link>
          <Link href={"/"}><Button variant="link">Blog</Button></Link>
          <Link href={"/"}><Button variant="link">Github</Button></Link>
          <Link href={"/"}><Button variant="link">Software</Button></Link>
        </li>
      </ul>
      <div className="w-48 flex-none flex justify-end" ><ModeToggle /></div>
    </nav >
  )
}

export default NavBar
