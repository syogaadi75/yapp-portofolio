import logoSvg from '../img/logo.svg'
import { WrenchScrewdriverIcon, BoltIcon, CodeBracketIcon, CommandLineIcon  } from '@heroicons/react/24/outline'

function Services() {
  return (
    <> 
      <div className="relative flex flex-wrap justify-center items-center h-screen pt-20 px-2 z-10 text-light ">
        <div className='absolute md:top-24 -z-10'>
          <div className="flex items-center justify-center"> 
            <img src={logoSvg} className="w-[40px] lg:w-[80px]" id="cover-services" alt='Logo' />
            <span className="text-primary text-xl lg:text-2xl font-semibold tracking-widest">Services</span>
          </div>
        </div>
        <div className="group y-card">
          <div className="w-full">
            <center>
              <WrenchScrewdriverIcon className="w-10 h-10 md:w-14 md:h-14 mt-4 text-primary group-hover:text-dark" />
            </center>
          </div>
          <h4 className="text-center text-base mt-2 md:mt-5 font-bold">Build Website</h4>
          <p className="y-card-body">
            Building a website application according to the what do you want to make.
          </p>
        </div> 
        <div className="group y-card">
          <div className="w-full">
            <center>
              <BoltIcon className="w-10 h-10 md:w-14 md:h-14 mt-4 text-primary group-hover:text-dark" />
            </center>
          </div>
          <h4 className="text-center text-base mt-2 md:mt-5 font-bold">Fast Working</h4>
          <p className="y-card-body">
            Able to work quickly according to the set time. And it can be even faster if there are more offers
          </p>
        </div>   
        <div className="group y-card">
          <div className="w-full">
            <center>
              <CodeBracketIcon className="w-10 h-10 md:w-14 md:h-14 mt-4 text-primary group-hover:text-dark" />
            </center>
          </div>
          <h4 className="text-center text-base mt-2 md:mt-5 font-bold">Front End Dev</h4>
          <p className="y-card-body">
            Building the user interface or UI & UX of a website application.
          </p>
        </div>   
        <div className="group y-card">
          <div className="w-full">
            <center>
              <CommandLineIcon className="w-10 h-10 md:w-14 md:h-14 mt-4 text-primary group-hover:text-dark" />
            </center>
          </div>
          <h4 className="text-center text-base mt-2 md:mt-5 font-bold">Back End Dev</h4>
          <p className="y-card-body">
            Building and maintain the mechanisms that process data and perform actions on website.
          </p>
        </div>   
      </div>
    </>
  )
}

export default Services