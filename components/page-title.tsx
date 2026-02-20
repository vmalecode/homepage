import { Separator } from "@/components/ui/separator";

type Props = {
  title: string
  children?: React.ReactNode;
};

const PageTitle = ({ title, children }: Props) => {
  return (
    <div className="py-16 sm:text-center lg:min-w-xl">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ">{title}</h1>
      {children}
      <Separator className="hidden sm:block bg-gradient-to-r from-transparent via-border to-transparent max-w-xl mx-auto mt-4" />
      <Separator className="sm:hidden bg-gradient-to-r from-border via-border to-transparent max-w-xl mx-auto mt-4" />
    </div>
  )
}

export default PageTitle
