import Container from "@/components/container"
import { Separator } from "@/components/ui/separator"

const software = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
        <div className="hidden lg:block "></div>
        {/* Main content / middle */}

        <div className="py-16 sm:text-center border-red-900 border-3">
          <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ">Demo Software</h1>
          <h2 className="text-lg ">A collection of free to use software I made</h2>
          {/* <h3 className="text-sm text-muted-foreground">I do not use AI to write or assist with writing</h3> */}
          <Separator className="max-w-xl mx-auto mt-4" />
        </div>
      </div>
    </Container>
  )
}

export default software
