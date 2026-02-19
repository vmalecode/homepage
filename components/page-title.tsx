import { Separator } from "@/components/ui/separator";

type Props = {
  title: string
  children?: React.ReactNode;
};

const PageTitle = ({ title, children }: Props) => {
  return (
    <div className="py-16 sm:text-center border-red-900 border-3 lg:min-w-xl">
      <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ">Demo Software</h1>
      <h2 className="text-lg ">{title}</h2>
      {children}
      <Separator className="max-w-xl mx-auto mt-4" />
    </div>
  )
}

export default PageTitle
