import React from "react";
import { useTranslation } from "react-i18next";

import ExperienceCard from "./educationCard";
import styles from "./styles.module.css";

const EducationLabel = {
    educationLabel: "Education",
    educationList: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institute: "SRM Institute of Science & Technology, Chennai",
            percentage: "Percentage: 86.63%",
            duration: "2016 - 2020"
        },
        {
            degree: "Higher Secondary Education (Class XII)",
            institute: "St Paul High School , Patna ",
            percentage: "Percentage: 75%",
            duration: "2014 - 2016"
        },
        {
            degree: "Secondary School Certificate - Class X",
            institute: "St Annes High School , Patna ",
            percentage: "Percentage: 93.1%",
            duration: "2011 - 2014"
        },
        {
            degree: "Secondary School Certificate - Till Class VI",
            institute: "St Francis School , Ranchi ",
            duration: "2004 - 2010"
        }
    ]
}

const Education = () => {
    const {t} = useTranslation();
  return (
    <div className="mt-9">
      <div>
        <h2
          className={`${styles.experienceHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(EducationLabel.educationLabel)}
        </h2>
      </div>
      {/* Experience Card */}
      <div className="flex flex-col py-4 px-8 gap-6 lg:gap-8">
        <div className="flex items-center justify-center gap-7 flex-wrap lg:gap-5 ">
            {EducationLabel.educationList.map((item, index) => (
                <div className={`${styles.educationCardStyle} rounded-xl w-full  lg:max-w-112.5`} key={index}>
                    <ExperienceCard {...item}/>
                </div>
                
            ))}
            
        </div>
        
      </div>
    </div>
  );
};

export default Education;
