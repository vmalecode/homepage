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
    <div className="
      my-4 
      bg-gradient-to-r from-transparent via-border to-transparent
      ">
      <h1 className="sm:text-center text-3xl mb-4 pl-3 pt-3">{title}</h1>
      <Image
        src={imgSrc}
        width={imgSize}
        height={imgSize}
        alt="Missing Img"
        className={cn("mx-auto w-full sm:w-[460px]")}
        style={{ maxWidth: `${imgSize}px` }}
      />
      <div className="sm:flex justify-center">
        <ul className="list-disc pl-6 pr-3 py-3 sm:max-w-md">
          {children}
        </ul>
      </div>
    </div >
  )
}

export default project
