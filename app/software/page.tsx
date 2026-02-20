import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import Project from "@/components/project"
import chessGif from "@/assets/chess.gif"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LiLink from "@/components/li-link"
import { Separator } from "@/components/ui/separator"

const software = () => {
  return (
    <Container>
      <div className="flex justify-center">
        {/* Main content / middle */}
        <div>
          <PageTitle title="Demo Software" >
            <h2 className="text-lg ">A few learning projects to share</h2>
          </PageTitle>
          <div className="flex flex-col justify-center">
            <Project title="Chess" imgSrc={chessGif.src}>
              <li>A functional game of chess in the CLI using icons to simulate a board</li>
              <li>Ruby learning project</li>
              <LiLink text="REPL" url="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" />
            </Project>
            <Separator className="hidden min-w-200 sm:block bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
            <Separator className="sm:hidden bg-gradient-to-r from-border via-border to-transparent max-w-xl mx-auto mt-4" />
            <Project title="Chess" imgSrc={chessGif.src}>
              <li>A functional game of chess in the CLI using icons to simulate a board</li>
              <li>Ruby learning project</li>
              <li><Button variant="link" className="px-0"><Link href="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" target="_blank" rel="noopener noreferrer" >REPL</Link></Button></li>
            </Project>
          </div>
        </div>
      </div>
    </Container >
  )
}

export default software
