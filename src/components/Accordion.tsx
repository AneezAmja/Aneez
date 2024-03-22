import React, { useState } from "react";

const jobs = [
  {
    company: "Vertu Motors",
    description: [
      "Test 1.",
      "Test 2.",
    ],
    jobTitle: "Web Developer @",
    duration: "AUG 2021 - AUG 2023",
  },
  {
    company: "5and3",
    description: [
      "Test 3.",
      "Test 4.",
    ],
    jobTitle: "Trainee Developer @",
    duration: "MAR 2020 - JUN 2021",
  },
  {
    company: "Grandad Digital",
    description: [
      "Test 5.",
      "Test 6.",
    ],
    jobTitle: "Apprentice Developer @",
    duration: "OCT 2018 - OCT 2019",
  },
];

const Accordion: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>(jobs[0].company);

  const toggleAccordion = (jobName: string) => {
    setSelectedJob((prevJob) => (prevJob === jobName ? '' : jobName));
  };

  return (
    <div className="flex flex-col md:flex-row h-[300px] pt-3">
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
                <li
                  key={i}
                  className="before:content-['▹'] before:text-[30px] before:absolute before:left-[-8px] before:text-secondary-content text-base list-none py-2"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
