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
    </div >
  )
}

export default project
