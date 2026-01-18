import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import SkillCard from "./skillCard";
import SkillCardSlider from "./skillCardSlider";
import styles from "./styles.module.css";

const SkillLabels = {
  skillsHeading: "Skills & Technologies",
  skillArray: [
    {
      id: 111,
      skillHeading: "Programming , Languages",
      languages: ["JavaScript", "TypeScript"],
    },
    {
      id: 112,
      skillHeading: "Frontend , Frameworks",
      languages: ["ReactJS", "NextJS", "Tailwind CSS"],
    },
    {
      id: 113,
      skillHeading: "Version , Control",
      languages: ["Git", "Github", "GitLab", "Bitbucket"],
    },
    {
      id: 114,
      skillHeading: "Tools",
      languages: ["VSCode", "JIRA", "Confluence", "PostMan"],
    },
    {
      id: 115,
      skillHeading: "Deployment",
      languages: ["Github", "Varcel", "Netlify", "Render"],
    },
    {
      id: 116,
      skillHeading: "Software Design &,  Architecture",
      languages: ["LLD", "HDD"],
    },
    {
      id: 117,
      skillHeading: "AI , Tools",
      languages: ["Gemini", "OpenAI", "Cursor", "Copilot"],
    },
  ],
  skillArrayMobile: [
    {
      id: 141,
      skillHeading: "Programming , Languages",
      languages: ["JavaScript", "TypeScript", "C++"],
    },
    {
      id: 142,
      skillHeading: "Frontend , Frameworks",
      languages: ["ReactJS", "NextJS", "Tailwind CSS"],
    },
    {
      id: 143,
      skillHeading: "Version , Control",
      languages: ["Git", "Github", "GitLab", "Bitbucket"],
    },
    {
      id: 144,
      skillHeading: "Tools",
      languages: ["VSCode", "JIRA", "Confluence", "PostMan"],
    },
    {
      id: 145,
      skillHeading: "Deployment",
      languages: ["Github", "Varcel", "Netlify", "Render"],
    },
    {
      id: 146,
      skillHeading: "Software Design &,  Architecture",
      languages: ["LLD", "HDD", "Design Patterns"],
    },
    {
      id: 147,
      skillHeading: "AI , Tools",
      languages: ["ChatGPT","Gemini", "OpenAI", "Cursor", "Copilot", "PerPlexity AI"],
    },
  ]
};

const Skills = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerMode: false, // better UX on tablet
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "25%", // 👈 creates 1.5 slide effect
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h2
          className={`${styles.skillsHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(SkillLabels.skillsHeading)}
        </h2>

        <div
          className={`flex items-center justify-center mx-auto p-4 px-8 flex-wrap gap-5 lg:gap-7 lg:hidden`}
        >
          {SkillLabels.skillArrayMobile.map((skill) => {
            return (
              <div key={skill.id} className="w-full">
                <SkillCard {...skill} />
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block p-6 ">
          <Slider {...settings}>
            {SkillLabels.skillArray.map((skill) => {
              return (
                <div key={skill.id}>
                  <SkillCardSlider {...skill} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Skills;
