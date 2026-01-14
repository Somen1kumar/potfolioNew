import React from "react";
import { useTranslation } from "react-i18next";
import { Briefcase } from "lucide-react";
import ExperienceCard from "./experienceCard";
import styles from "./styles.module.css";

const Labels = {
  experieneHeading: "Experience",
  experienceArray: [
    {
      company: "Publicis Sapient",
      role: "Associate Experience Technology L2",
      location: "Gurugram, Haryana, India",
      duration: "Nov 2022 – present · 3+ years",
      descriptions: [
        "Created Low-Level Design (LLD) documentation, including Technical Design and Sequence Diagrams",
        "Worked on features for the brand’s website using a config-driven UI approach with Next.js, Typescript and Tailwind, enhancing user engagement and reducing loading time by 15%",
        "Built reusable React components using atomic design pattern and integrated them into complete features within Next.js, implementing Graph-QL at server side for efficient endpoint communication",
        "Lead a team of 12 developers, providing technical guidance and mentorship while ensuring code quality consistently exceeded 85% through rigorous reviews and best practice enforcement",
        "Created shimmer UI effect specific to project to give a better user experience until the page was loaded.",
      ],
    },
    {
      company: "Publicis Sapient",
      role: "Associate Experience Technology L1",
      location: "Gurugram, Haryana, India",
      duration: "Jan 2021 – Oct 2022 · 1.9 years",
      descriptions: [
        "Collaborated with design teams using Figma to implement and maintain the front end Project and achieving a 10% reduction in page load speed through optimization techniques while ensuring WCAG 2.0 compliance for an accessible and responsive user experience across all devices",
        "Developed multiple responsive features for mobile, tablet, and desktop devices using HTML, CSS media queries, and React.js, utilizing third-party libraries",
        "Contributed to analytics initiatives by integrating data into the data layer to track product viability, customer behaviour, and sales performance",
        "Worked collaboratively with the team to develop reusable components and authored unit test cases, resulting in improved test coverage by 30%.",
      ],
    },
    {
      company: "Cognizant",
      role: "Programmer Ananlyst Trainee",
      location: "Chennai, Tamil Nadu, India",
      duration: "Sept 2020 – Dec 2020 · 4 months",
      descriptions: [
        "E-commerce Site Development which means Developed a high-performance e-commerce application Watch-wave using React for the frontend, integrating TMDB's live API for dynamic content and Firebase Authentication for secure login/logout with smooth animations.",
        "Performance and Reliability Enhancements which means Implemented error handling strategies, wrote test cases to cover minimum 85% code quality, and improved load times through shimmer effects, code splitting, and lazy loading of images.",
        "Optimized performance by minimizing unnecessary re-renders and using React.memo when needed.",
        "Worked with Git version control to commit code changes, branch, and merge features collaboratively.",
      ],
    },
  ],
};

const Experience = () => {
    const { t } = useTranslation();
  return (
    <div className="mt-9">
      <div>
        <h2
          className={`${styles.experienceHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(Labels.experieneHeading)}
        </h2>
      </div>
      {/* Experience Card */}
      <div className="flex flex-col py-4 px-8 gap-6 lg:gap-8">
        {Labels.experienceArray.map((item, index) => {
          return (
            <div className="flex flex-row lg:m-auto gap-[3%]" key={index}>
              <div className="bg-[#D32F2F] w-14 h-14 rounded-[50%] gap-4 hidden lg:flex lg:justify-center  relative top-5 ">
                <span className="m-auto">
                  <Briefcase fill="#fff" />
                </span>
              </div>
              <ExperienceCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
