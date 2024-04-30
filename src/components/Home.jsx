import React from "react";
import { ReactTyped } from "react-typed";
import FadeIn from "./FadeIn";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <>
          <ReactTyped
            className="text-4xl sm:text-6xl text-center py-5 max-w-[600px] font-semibold"
            strings={[
              "hi, <h1 class='inline text-secondary-content'>aneez</h1> here",
            ]}
            typeSpeed={50}
            // smartBackspace
            showCursor
            cursorChar="|"
          />
        <FadeIn>
          <p className="text-sm md:text-xl text-center max-w-[800px] leading-7 md:leading-relaxed">
            I'm a{" "}
            <span className="text-secondary-content">software engineer</span>{" "}
            from London, England. Always open to contributing to great software
            projects, you will find me getting my hands dirty with any piece of
            software I can get my hands on.
          </p>
        </FadeIn>

          <a className="text-xl border-[3px] py-4 px-5 rounded-md border-secondary-content mt-10 text-primary-content cursor-pointer transition-bg duration-500 ease-in-out hover:bg-secondary-content hover:text-copy font-semibold" href="mailto:aneez.amja@gmail.com">
            Say hi 👋🏾
          </a>
        </>

      </div>
    </div>
  );
};

export default Home;
