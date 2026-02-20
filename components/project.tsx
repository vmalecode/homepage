import Image from 'next/image'
import { Separator } from './ui/separator';

type Props = {
  children?: React.ReactNode;
  title: string;
  imgSrc: string;
};

const project = ({ title, children, imgSrc }: Props) => {
  return (
    <div className="my-4">
      <h1 className="text-3xl mb-4">{title}</h1>
      <Image
        src={imgSrc}
        width={350}
        height={150}
        alt="Missing Img"
      />
      <ul className="list-disc pl-6">
        {children}
      </ul>
      <Separator className="hidden min-w-100 sm:block bg-gradient-to-r from-transparent via-border to-transparent mt-4" />
      <Separator className="sm:hidden bg-gradient-to-r from-border via-border to-transparent max-w-xl mx-auto mt-4" />
    </div >
  )
}

export default project
