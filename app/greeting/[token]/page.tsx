import { FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadContactButton from "@/components/download-contact-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import selfPng from "@/assets/aaron.png"
import Container from '@/components/container'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { redirect } from 'next/navigation'
import CopyButton from "@/components/copy-button";

interface Props {
  params: Promise<{ token: string }>
}

export async function generateStaticParams() {
  const token = process.env.GREETING_TOKEN
  return [{ token: token }]
}

export default async function GreetingPage({ params }: Props) {
  const { token } = await params
  const serverToken = process.env.GREETING_TOKEN
  const phone = process.env.PHONE_SECRET || ""
  const email = process.env.EMAIL_SECRET || ""
  if (!serverToken || serverToken != token) {
    redirect('/')
  }
  return (
    <Container>
      <div className="mt-10">
        <Avatar className="mx-auto h-30 w-30">
          <AvatarImage src={selfPng.src} />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <h1 className="whitespace-nowrap mb-1 mt-10 text-center text-3xl sm:text-4xl tracking-tight font-bold ">
          Hi, I'm Aaron!
        </h1>
        <h3 className="text-center text-l text-muted-foreground">
          My contact info is below.
        </h3>
        <Separator
          className="
          sm: max-w-xl
          my-6
          mx-auto
          bg-gradient-to-r from transparent via-border to-transparent
  "
        />
        <DownloadContactButton className="flex justify-center mb-2" firstName="Aaron" lastName="Van Der Male" phone={phone} email={email} />
        <h3 className="text-center text-l text-muted-foreground my-2">
          Or, copy manually:
        </h3>
        <CopyButton copyText="Aaron Van Der Male" className="flex justify-center my-1" />
        <CopyButton copyText={phone} className="flex justify-center my-2" />
        <CopyButton copyText={email} className="flex justify-center my-2" />
        <div className="flex justify-center mt-6">
          <Link href="https://www.linkedin.com/in/aaronvandermale/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="h-10 w-10 mx-4" /></Link>
          <Link href="https://www.github.com/vmalecode" target="_blank" rel="noopener noreferrer" ><FaGithub className="h-10 w-10 mx-4" /></Link>
        </div>
      </div >
    </Container >
  )
}
