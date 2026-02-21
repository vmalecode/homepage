import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import Project from "@/components/project"
import chessGif from "@/assets/chess.gif"
import wordleGif from "@/assets/wordle.gif"
import mlGif from "@/assets/ml.gif"
import LiLink from "@/components/li-link"
import ResponsiveSeparator from "@/components/responsive-separator"

const software = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-1 pt-2">
        <div className="hidden sm:block"></div>
        {/* Main content / middle */}
        <div>
          <PageTitle title="Demo Software" >
            <h2 className="text-lg ">Small learning / demo projects</h2>
            <h3 className="text-sm text-muted-foreground">I don't consider myself a vibe-coder, but do use AI</h3>
          </PageTitle>
          <Project title="Wordle Clone" imgSrc={wordleGif.src} imgSize={300} >
            <li>A clone of Wordle using React and Redux</li>
            <li>Vanilla CSS and JavaScript</li>
            <li>Deployed on GCP Cloud Run</li>
            <LiLink text="Play Now" url="https://wordle-clone-ibir6636ua-uc.a.run.app/instructions" />
            <LiLink text="Source" url="https://github.com/vmalecode/aaron-vandermale-project2-wordle" />
          </Project>
          <ResponsiveSeparator />
          <Project title="Chess" imgSrc={chessGif.src} imgSize={450}>
            <li>A functional game of chess in the CLI using icons to simulate a board</li>
            <li>Ruby learning project</li>
            <LiLink text="Source" url="https://github.com/vmalecode/chess" />
            <LiLink text="REPL" url="https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb" />
          </Project>
          <ResponsiveSeparator />
          <Project title="Machine Learning Classification" imgSrc={mlGif.src} imgSize={450}>
            <li>ML project to classify fraudulent insurance claims from synthetic dataset</li>
            <li>Gradient Boosting Classifier built with Python/sklearn</li>
            <li>Utilized common methods to analyze and optimize model performance</li>
            <li>f-1 score and detailed in extensive report</li>
            <LiLink text="Source" url="https://github.com/vmalecode/insurance_ml_project/blob/main/report.pdf" />
            <LiLink text="Streamlit Demo App" url="https://ml-proj-ibir6636ua-uc.a.run.app/" />
          </Project>
          <div className="hidden sm:block"></div>
        </div>
      </div>
    </Container >
  )
}

export default software
