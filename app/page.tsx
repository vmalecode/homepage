import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import selfPng from "@/assets/aaron.png"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="">
        <Avatar className="mx-auto h-30 w-30">
          <AvatarImage
            src={selfPng.src}
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <h1 className="whitespace-nowrap mb-4 mt-10 text-center text-3xl sm:text-4xl tracking-tight font-extrabold ">
          Aaron Van Der Male
        </h1>
        <Separator className="mt-5 mb-5 max-w-8/10 mx-auto" />
        <h3 className="text-center text-xl text-muted-foreground">
          Developer | Seattle, WA
        </h3>
        <div className="flex justify-center mt-6">
          <Link href="https://www.linkedin.com/in/aaronvandermale/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="h-8 w-8 mx-2" /></Link>
          <Link href="https://www.github.com/vmalecode" target="_blank" rel="noopener noreferrer" ><FaGithub className="h-8 w-8 mx-2" /></Link>
        </div>
        <div className="flex justify-center mt-6">
          <ul className="text-3xl space-y-1 text-muted-foreground">
            <li><Link href={"/portfolio"}><Button variant="link" className="text-2xl space-y-1 text-muted-foreground">Portfolio</Button></Link ></li>
            <li><Link href={"/"}><Button variant="link" className="text-2xl space-y-1 text-muted-foreground">About</Button></Link ></li>
            <li><Link href={"/software"}><Button variant="link" className="text-2xl space-y-1 text-muted-foreground">Software</Button></Link ></li>
          </ul >
        </div >
      </div >
    </div >
  )
}
