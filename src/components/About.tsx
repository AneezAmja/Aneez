import React from "react";
import ListItem from "./ListItem";
import FadeIn from "./FadeIn";
// @ts-ignore
import ProfilePicture from "../assets/DSC03453_LR_FULL_RES-min.jpg";
import useIsMobileView from "../util/useIsMobileView";

const About = () => {
  const isMobileView = useIsMobileView();

  return (
    <div id="about" className="h-4/5 container mx-auto max-w-[1000px] px-8 pb-8">
      <FadeIn>
        <h1 className="text-3xl md:text-[45px] text-secondary-content font-bold md:py-5 relative">
          / about me
          {/* <span className="absolute after:inline-block after:bg-[#233554] after:h-[1px] after:w-300 after:text-#f6cccc after:ml-[70px]"></span> */}
        </h1>
      </FadeIn>

      <div className="flex justify-between">
        <div className="w-full md:w-[70%]">
          <FadeIn dir="left">
            <div className="py-5">
              I am a Front-End Developer specialising in Typescript, React and
              Redux, with Node.js and Express.js in the backend.
              <br />
              Here are some technologies I have been working with:
            </div>
          </FadeIn>

          <FadeIn>
            <div className="flex justify-between w-full py-2 px-4 md:py-5 lg:w-[80%]">
              <span className="relative">
                <ListItem>Typescript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>Javascript ES6+</ListItem>
                <ListItem>Angular</ListItem>
              </span>

              <span className="relative">
                <ListItem>Nodejs</ListItem>
                <ListItem>ExpressJS</ListItem>
                <ListItem>Mongodb</ListItem>
                <ListItem>Flutter</ListItem>
              </span>

              <span className="relative">
                <ListItem>PHP/Laravel</ListItem>
              </span>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="py-5">
              Outside of work I am a highly competitive individual when it comes to sports, I frequently part take in a 5
              aside football match every week. I also am an avid gamer - cant beat getting lost in a new world! Current favourite is RDR2 🤠🐎 
            </p>
          </FadeIn>
        </div>
        <FadeIn duration={1200} dir={isMobileView ? 'up' : 'right'}>
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden hidden md:block duration-500 ease-in-out transform transition-transform hover:grayscale hover:scale-110 cursor-pointer">
            <img
              src={ProfilePicture}
              alt="a picture of me"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
