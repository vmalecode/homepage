import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import Project from "@/components/project"
import chessGif from "@/assets/chess.gif"
import wordleGif from "@/assets/wordle.gif"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LiLink from "@/components/li-link"
import ResponsiveSeparator from "@/components/responsive-separator"

const software = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-1 pt-2 lg:pt-15">
        <div className="hidden lg:block"></div>
        {/* Main content / middle */}
        <div>
          <PageTitle title="Demo Software" >
            <h2 className="text-lg ">Small learning / demo projects</h2>
            <h3 className="text-sm text-muted-foreground">I don't consider myself a vibe-coder, but do use AI</h3>
          </PageTitle>
          <Project title="Wordle Clone" imgSrc={wordleGif.src} imgSize={300} >
            <li>A clone of Wordle using React and Redux</li>
            <li>Used custom CSS to create mobile friendly UI</li>
            <li>Deployed on GCP Cloud Run</li>
            <li>Containerized using Docker</li>
            <LiLink text="REPL" url="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" />
          </Project>
          <ResponsiveSeparator />
          <Project title="Chess" imgSrc={chessGif.src} imgSize={150}>
            <li>A functional game of chess in the CLI using icons to simulate a board</li>
            <li>Ruby learning project</li>
            <li><Button variant="link" className="px-0"><Link href="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" target="_blank" rel="noopener noreferrer" >REPL</Link></Button></li>
          </Project>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </Container >
  )
}

export default software
