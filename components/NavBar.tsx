import Link from "next/link"

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/60 sticky top-0 border-b px-8
      backdrop-blur flex justify-between'>
      <div className="fond-bold text-xl">
        Aaron's Homepage
      </div>
      <ul className="flex w-full justify-end">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
