import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import Project from "@/components/project"
import selfPng from "@/assets/chess.gif"

const software = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
        <div className="hidden lg:block "></div>
        {/* Main content / middle */}
        <div>
          <PageTitle title="Demo Software" >
            <h2 className="text-lg ">A collection of free to use software I made</h2>
          </PageTitle>
          <div className="flex justify-center">
            <Project title="Test Project" imgSrc={selfPng.src}>
              <li>Bullet</li>
              <li>Bullet</li>
              <li>Bullet</li>
              <li>Bullet</li>
            </Project>
          </div>
        </div>
        <div className="hidden lg:block "></div>
      </div>
    </Container >
  )
}

export default software
