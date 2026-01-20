import Link from "next/link"
import { Button } from "./ui/button"

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/60 sticky top-0 border-b px-8
      backdrop-blur items-center flex justify-between'>
      <div className="fond-bold text-xl">
        Aaron's Homepage
      </div>
      <ul className="items-center flex space-x-4">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li className="buttons px-4 space-x-2">
          <Button variant="link">Login</Button>
          <Button variant="link">Sign Up</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
