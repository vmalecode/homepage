import Link from "next/link"

export const MobileNav = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <Link href="/">Home</Link>
      <Link href="/">About</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Github</Link>
      <Link href="/">Portfolio</Link>
      <Link href="/">Software</Link>
    </div>
  )
}

