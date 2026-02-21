import { Separator } from "./ui/separator"

const ResponsiveSeparator = () => {
  return (
    <div>
      <Separator className="hidden sm:block bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
      <Separator className="sm:hidden bg-gradient-to-r from-border via-border to-transparent max-w-xl mx-auto mt-4" />
    </div>
  )
}

export default ResponsiveSeparator
