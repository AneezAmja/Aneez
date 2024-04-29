import React from "react";
import ListItem from "./ListItem";
import ProfilePicture from "../assets/DSC03453_LR_FULL_RES-min.jpg";

const About = () => {
  return (
    <div className="h-4/5 container mx-auto max-w-[1000px] px-8 pb-8">
      <h1 className="text-3xl md:text-[45px] text-secondary-content font-bold md:py-5 relative">
        / about me
        {/* <span className="absolute after:inline-block after:bg-[#233554] after:h-[1px] after:w-300 after:text-#f6cccc after:ml-[70px]"></span> */}
      </h1>

      <div className="flex justify-between">
        <div className="w-full md:w-[70%]">
          <div className="py-5">
            I am a Front-End Developer specialising in Typescript, React and
            Redux, with Node.js and Express.js in the backend.
            <br />
            Here are some technologies I have been working with:
          </div>
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
          <p className="py-5">
            Maecenas nec tempus justo. In vel nisi sit amet est vehicula rutrum
            eu a risus. Vestibulum est libero, ultricies vitae sem in, maximus
            sodales leo. Donec vitae tempor arcu. Duis in felis non ligula
            elementum viverra id a metus. Pellentesque elementum et justo vitae
            sagittis. Ut ac justo aliquam, cursus nisi eget, facilisis odio.
            Vivamus tincidunt dui sit amet augue tempus, vel eleifend nisl
            iaculis.
          </p>
        </div>
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden hidden md:block duration-500 ease-in-out transform transition-transform hover:grayscale hover:scale-110">
          <img
            src={ProfilePicture}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
