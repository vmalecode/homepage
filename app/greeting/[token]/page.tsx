import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from '@/components/container'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation'

interface Props {
  params: Promise<{ token: string }>
}

export default async function GreetingPage({ params }: Props) {
  const { token } = await params
  const serverToken = process.env.GREETING_TOKEN
  const phone = process.env.PHONE_SECRET
  const email = process.env.EMAIL_SECRET
  if (!serverToken || serverToken != token) {
    redirect('/')
  }
  return (
    <Container>
      <div className="mt-10">
        <h1 className="whitespace-nowrap mb-4 mt-10 text-center text-3xl sm:text-4xl tracking-tight font-bold ">
          Aaron Van Der Male
        </h1>
        <Separator
          className="
          sm: max-w-xl
          mx-auto
          my-6
          bg-gradient-to-r from transparent via-border to-transparent
  "
        />
        <h3 className="text-center text-xl ">
          Pleased to meet you
        </h3>
        <h3 className="text-center text-xl text-muted-foreground">
          This page is not finished
        </h3>
        <h3 className="text-center text-xl text-muted-foreground"> {phone} </h3>
        <h3 className="text-center text-xl text-muted-foreground"> {email} </h3>
        <div className="flex justify-center mt-6">
          <Link href="https://www.linkedin.com/in/aaronvandermale/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className="h-10 w-10 mx-4" /></Link>
          <Link href="https://www.github.com/vmalecode" target="_blank" rel="noopener noreferrer" ><FaGithub className="h-10 w-10 mx-4" /></Link>
        </div>
      </div >
    </Container>
  )
}
