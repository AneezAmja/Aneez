import React, { useState } from "react";
import FadeIn from "./FadeIn";
import useIsMobileView from "../util/useIsMobileView";

const jobs = [
  {
    company: "Vertu Motors",
    description: [
      `Working amongst a team of front-end developers alongside designers using React, TypeScript,
      JavaScript, Angular, HTML, CSS(BEM/SMACCS)/SCSS and gulp to maintain Vertu Motor’s
      14 websites.`,
      `Implementing data layers that are crucial to the business for learning the usage patterns for our
      avg. 200 thousand daily visitors.`, 
      `Responsible for leading the daily stand-up for a sub team, ensuring any blockers were removed
      from the team.`,
      `Ensured best practices in our codebase through pair-programming and periodic code-reviews.`,
    ],
    jobTitle: "Web Developer @",
    duration: "AUG 2021 - AUG 2023",
  },
  {
    company: "5and3",
    description: [
      `Utilised PHP, Backpack for Laravel, and Database abstraction through eloquent.`,
      `Worked with tools like Webpack and Bower`,
      `Familiar with using Linux based systems.`
    ],
    jobTitle: "Trainee Developer @",
    duration: "MAR 2020 - JUN 2021",
  },
  {
    company: "Grandad Digital",
    description: [
      `Proficient in HTML5, CSS3 and JavaScript, and have developed for WordPress based websites.
      Able to use CSS pre-processors like SASS and SCSS.`,
      `Conducting cross-browser and responsive testing in order to ensure style are similar across
      browsers, if not then was my duty to fix said issues.`,
      `Familiarity with using Google Analytics, Google Tag Manager and Google Data Studio.`,
    ],
    jobTitle: "Apprentice Developer @",
    duration: "OCT 2018 - OCT 2019",
  },
];

const Accordion: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>(jobs[0].company);
  const isMobileView = useIsMobileView();

  const toggleAccordion = (jobName: string) => {
    setSelectedJob((prevJob) => (prevJob === jobName ? prevJob : jobName));
  };

  return (
    <div className="flex flex-col md:flex-row pt-3">
      {/* Company column */}
      <div className="flex flex-col w-1/2 md:w-1/4 py-4 md:p-0">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 uppercase font-light w-full ${
              selectedJob === job.company
                ? "text-secondary-content border-r-2 border-secondary-content"
                : ""
            }`}
            onClick={() => toggleAccordion(job.company)}
          >
            {job.company}
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full md:w-3/4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`relative mx-2 md:ml-7 ${
              selectedJob === job.company ? 'block' : 'hidden'
            }`}
          >
            <div className="flex">
              <h1 className="text-xl md:text-2xl font-semibold">{job.jobTitle + " "}
              <span className="text-xl md:text-2xl font-semibold text-secondary-content">{job.company}</span>

              </h1>
            </div>
            <div className="text-base font-light pt-2">{job.duration}</div>

            <ul>
              {job.description.map((desc, i) => (
            <FadeIn duration={1500} dir={isMobileView ? 'up' : 'right'}  key={i}>
                <li
                className="before:content-['▹'] before:text-[30px] before:absolute before:left-[-8px] before:text-secondary-content text-sm md:text-base list-none py-2"
                >
                  {desc}
                </li>
              </FadeIn>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
