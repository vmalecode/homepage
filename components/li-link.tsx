import { FaExternalLinkAlt } from "react-icons/fa"
import { Button } from "./ui/button"
import Link from "next/link"
type Props = {
  text: string,
  url: string
}
const LiLink = ({ text, url }: Props) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center" >
        {text} <FaExternalLinkAlt className="mx-2" />
      </Link>
    </li >
  )
}

export default LiLink
