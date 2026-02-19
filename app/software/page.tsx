import Container from "@/components/container"
import PageTitle from "@/components/page-title"
import { Separator } from "@/components/ui/separator"

const software = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
        <div className="hidden lg:block border-4"></div>
        {/* Main content / middle */}
        <PageTitle title="Demo Software" >
          <h2 className="text-lg ">A collection of free to use software I made</h2>
        </PageTitle>
        <div className="hidden lg:block border-4"></div>
      </div>
    </Container >
  )
}

export default software
