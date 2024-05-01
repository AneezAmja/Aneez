import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaGithub, FaUpload } from "react-icons/fa";
import useIsMobileView from "../util/useIsMobileView";
import FadeIn from "./FadeIn";

const projects = {
  ecom: {
    title: "Performance Plus",
    desc: "An ecommerce platform that allows a user to create an account as well as purchase products.",
    techStack: "REACT, NODEJS, EXPRESS, MONGODB",
    link: "https://github.com/AneezAmja/ecommerce-project",
    open: "https://ecommerce-project-bay.vercel.app/products",
    image: "/performance-plus.png",
    githubLink: "https://github.com/AneezAmja/ecommerce-project",
    liveLink: "https://ecommerce-project-bay.vercel.app/products",
  },
  spotify: {
    title: "All the time wrapped",
    desc: "Tired of waiting ALL YEAR for your spotify wrapped? Well, I was. So I created an application to check ALL THE TIME.",
    techStack: "VANILLA JAVASCRIPT, NODEJS, EXPRESS",
    link: "https://github.com/AneezAmja/ecommerce-project",
    open: "https://ecommerce-project-bay.vercel.app/products",
    image: "/spotify.png",
    githubLink: null,
    liveLink: null,
  },
  aneez_notes: {
    title: "Notes by Aneez",
    desc: "I wanted to further develop my Flutter skills as well as utilise Firebase as a backend service... and I was tired of boring note apps!",
    techStack: "FLUTTER, DART, FIREBASE",
    link: "https://github.com/AneezAmja/ecommerce-project",
    open: "https://ecommerce-project-bay.vercel.app/products",
    image: "/aneez_notes-2.jpg",
    githubLink: "https://github.com/AneezAmja/notesbyaneez",
    liveLink: null,
  },
  pokedex: {
    title: "Pokedex",
    desc: "I've always wanted to create my own app and have a pokedex. Why not have both?",
    techStack: "FLUTTER, DART",
    link: "https://github.com/AneezAmja/ecommerce-project",
    open: "https://ecommerce-project-bay.vercel.app/products",
    image: "/pokemon.jpg",
    githubLink: "https://github.com/AneezAmja/pokedex",
    liveLink: null,
  },
  coursework: {
    title: "rocketz",
    desc: "A 2D game waved based survival game where your rocket ship is battling enemy rocket ships.",
    techStack: "JAVA",
    link: "https://github.com/AneezAmja/ecommerce-project",
    open: "https://ecommerce-project-bay.vercel.app/products",
    image: "/rocketz.jpg",
    githubLink: null,
    liveLink: null,
  },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileView = useIsMobileView();

  const goToPreviousImage = () => {
    const prevIndex =
      (currentIndex - 1 + Object.keys(projects).length) %
      Object.keys(projects).length;
    setCurrentIndex(prevIndex);
    setSelectedProject(prevIndex);
  };

  const goToNextImage = () => {
    const nextIndex = (currentIndex + 1) % Object.keys(projects).length;
    setCurrentIndex(nextIndex);
    setSelectedProject(nextIndex);
  };

  useEffect(() => {
    if (!isMobileView) {
      var interval = setInterval(() => {
        setSelectedProject(
          (prevProj) => (prevProj + 1) % Object.keys(projects).length,
        );
      }, 8000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isMobileView]);

  if (isMobileView) {
    return (
      <div id='projects' className="h-4/5 container px-8">
        <FadeIn>
          <h1 className="text-3xl  text-secondary-content font-bold py-5 relative">
            / projects
          </h1>
        </FadeIn>
        <div className="flex flex-col items-center pb-8">
          {Object.keys(projects).map((key, i) => (
            <FadeIn>
              <div key={i} className="mb-12">
                <img
                  src={projects[key].image}
                  alt={projects[key].desc}
                  className="w-full rounded-lg"
                />
                <div className="flex items-center justify-center">

                <h2 className="text-center my-3 text-[#fefefe] text-xl lowercase font-bold">
                  {projects[key].title}
                </h2>
                <div className="text-[#fefefe]  flex justify-center">
                        {projects[key].githubLink && (
                          <a
                            className="pointer pr-4 pl-4 z-50"
                            href={projects[key].githubLink}
                          >
                            <FaGithub />
                          </a>
                        )}
                        {projects[key].liveLink && (
                          <a
                            className="pointer z-50"
                            href={projects[key].liveLink}
                          >
                            <FaUpload />
                          </a>
                        )}
                      </div>

                </div>
                <p className="text-center text-[#fefefe] text-sm font-medium">
                  {projects[key].desc}
                </p>
                <p className="text-center text-secondary-content text-sm font-bold pt-3">
                  {projects[key].techStack}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id='projects' className="h-full container mx-auto max-w-[1000px] px-8">
      <FadeIn>
        <h1 className="text-3xl md:text-[45px] text-secondary-content font-bold md:py-5 relative">
          / projects
        </h1>
      </FadeIn>

      <FadeIn>
        <div className="h-[500px] overflow-hidden relative rounded-2xl mt-6">
          <div className="absolute inset-0 flex">
            {Object.keys(projects).map((key, i) => (
              <div
                key={i}
                className={`w-full h-full ${
                  selectedProject === i ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 transition-opacity duration-500`}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0"></div>
                  <img
                    src={projects[key].image}
                    alt={projects[key].desc}
                    className="w-full h-full"
                  />

                  <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
                    <div className="text-center w-1/2 m-auto">
                      <h1 className="text-[#fefefe] text-3xl lowercase font-bold mb-5 text-stroke-3">
                        {projects[key].title}
                      </h1>
                      <p className="text-[#fefefe] text-sm font-medium [text-shadow:_0_1px_0_rgb(0_0_0_/_100%)]">
                        {projects[key].desc}
                      </p>
                      <p className="text-secondary-content text-sm font-bold mt-2">
                        {projects[key].techStack}
                      </p>
                      <div className="text-[#fefefe] mt-2 flex justify-center">
                        {projects[key].githubLink && (
                          <a
                            className="pointer pr-6 z-50"
                            href={projects[key].githubLink}
                          >
                            <FaGithub />
                          </a>
                        )}
                        {projects[key].liveLink && (
                          <a
                            className="pointer z-50"
                            href={projects[key].liveLink}
                          >
                            <FaUpload />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2  p-2 text-secondary-content text-5xl"
                onClick={goToPreviousImage}
              >
                <FaAngleLeft />
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-secondary-content text-5xl"
                onClick={goToNextImage}
              >
                <FaAngleRight />
              </button>
            </>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Projects;
