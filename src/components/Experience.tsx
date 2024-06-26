import React from 'react'
import Accordion from './Accordion';
import FadeIn from "./FadeIn";


const Experience = () => {


  return (
    <div id="experencies" className="h-max-content md:h-4/5 container mx-auto max-w-[1000px] px-8">

      <FadeIn>
    <h1 className="text-3xl md:text-[45px] text-secondary-content font-bold md:py-5 relative">
      / experience
      <div className="absolute after:inline-block after:bg-[#233554] after:h-[1px] after:w-300 after:text-#f6cccc after:ml-[70px]"></div>
    </h1>
      </FadeIn>

        <Accordion />

    

    </div>
  )
}

export default Experience