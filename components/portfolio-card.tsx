
import Image from 'next/image'
type Props = {
  imgSrc: string
  company: string,
  jobTitle: string,
  tenure: string
}
const PortfolioCard = ({ imgSrc, company, jobTitle, tenure }: Props) => {
  return (
    <div className="flex items-center bg-gradient-to-r from-secondary via-secondary to-transparent rounded-lg">
      <Image
        src={imgSrc}
        alt={company}
        width={50}
        height={40}
        className="ml-2 rounded-lg"
      />
      <div className="mx-3">
        <h2 className="whitespace-nowrap text-xl sm:text-2xl">{company}</h2>
        <h3 className="text-muted-foreground whitespace-nowrap">{jobTitle}</h3>
        <h3 className="text-muted-foreground text-sm whitespace-nowrap ">{tenure}</h3>
      </div>
    </div>
  )
}

export default PortfolioCard
