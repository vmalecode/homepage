import Image from 'next/image'
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

type Props = {
  children?: React.ReactNode;
  title: string;
  imgSrc: string;
  imgSize: number;
};

const project = ({ title, children, imgSrc, imgSize }: Props) => {
  return (
    <div className="my-4">
      <h1 className="sm:text-center text-3xl mb-4">{title}</h1>
      <Image
        src={imgSrc}
        width={imgSize}
        height={imgSize}
        alt="Missing Img"
        className={cn("sm:mx-auto w-full sm:w-[360px]")}
        style={{ maxWidth: `${imgSize}px` }}
      />
      <ul className="list-disc pl-6">
        {children}
      </ul>
    </div >
  )
}

export default project
