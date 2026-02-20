import Container from "@/components/container"
import { Separator } from "@/components/ui/separator"
import boeingLogo from "@/assets/boeing_logo.png"
import walmartLogo from "@/assets/walmartglobaltech_logo.png"
import neuLogo from "@/assets/northeastern_university_logo.jpg"
import Image from 'next/image'
import PortfolioCard from "@/components/portfolio-card"

const Portfolio = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-1 pt-2 lg:pt-15">
        <div className="hidden lg:block"></div>
        <div className="max-w-185">
          <h1 className="whitespace-nowrap mb-4 mt-10 text-3xl sm:text-4xl tracking-tight font-bold ">
            Experience
          </h1>
          {/* Experience 1 */}
          <Separator className="w-full mb-3  bg-gradient-to-r from-border via-border to-transparent" />
          <PortfolioCard
            imgSrc={walmartLogo.src}
            company="Walmart Global Tech"
            jobTitle="Software Engineer III"
            tenure="Dec 2025 - Present"
          />
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>Support Walmart's Unified Payment Platform in multiple regions across the US and North America</li>
            <li>Migrate legacy APIs to new cloud platform, resolving performance and compatibility issues resulting in significantly enhanced resiliance and reliability</li>
            <li>Resolve production issues</li>
            <li>Enhance payment system resiliancy by introducing hibernate and querydsl into automation testing, uncovering and resolving schema conflicts resulting in superior first pass quality of regression tests</li>
          </ul>

          {/* Experience 2 */}
          <Separator className="w-full mt-4 mb-3  bg-gradient-to-r from-border via-border to-transparent" />
          <PortfolioCard
            imgSrc={boeingLogo.src}
            company="Boeing"
            jobTitle="Software Engineer"
            tenure="Jun 2023 - Dec 2024"
          />
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>Supported legacy Spring applications, resolved production issues & provide devops support</li>
            <li>Developed edge compute software to subscribe to automated wing assembly build line and trigger internal business processes increasing responsiveness, correctness and reducing production flow time by over 200 shop hours</li>
            <li>Transition company from polling based architecture to event based system, massively increasing responsiveness, reliability and decreasing computational overhead</li>
            <li>Designed, developed, deployed Node.js microsites to collate QA inspection information utilizing agile principles to ensure customer satisfaction and system performance</li>
            <li>Deployed various dashboards to monitor manufacturing activity and airplane condition of assembly</li>
          </ul>

          <h1 className="whitespace-nowrap mb-4 mt-10 text-3xl sm:text-4xl tracking-tight font-bold ">
            Education
          </h1>
          <Separator className="w-full mt-4 mb-3  bg-gradient-to-r from-border via-border to-transparent" />
          <PortfolioCard
            imgSrc={neuLogo.src}
            company="Northeastern University"
            jobTitle="Master's Degree, Computer Science"
            tenure="May 2023"
          />
          <div className="min-h-20"></div>
        </div>

        <div className="hidden lg:block"></div>
      </div>
    </Container >
  )
}

export default Portfolio
