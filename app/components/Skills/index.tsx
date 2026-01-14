
import React from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "./skillCard";
import styles from "./styles.module.css";

const SkillLabels = {
    skillsHeading: "Skills & Technologies",
    skillArray: [
        {
            id:111,
            skillHeading: "Programming , Languages",
            languages: ["JavaScript", "TypeScript", "C++"]
        },
        {
            id:112,
            skillHeading: "Frontend , Frameworks",
            languages: ["ReactJS", "NextJS", "Html5", "CSS", "Tailwind CSS"]
        },
        {
            id:113,
            skillHeading: "Version , Control",
            languages: ["Git", "Github", "GitLab", "Bitbucket" ]
        },
        {
            id:114,
            skillHeading: "Tools",
            languages: ["VSCode", "JIRA", "Confluence", "PostMan" ]
        },
        {
            id:115,
            skillHeading: "Deployment",
            languages: ["Github", "Varcel", "Netlify", "Render" ]
        },
        {
            id:116,
            skillHeading: "Software Design &,  Architecture",
            languages: ["LLD", "HDD", "Design Pattern" ]
        },
        {
            id:117,
            skillHeading: "AI , Tools",
            languages: ["ChatGPT", "Gemini", "OpenAI", "Cursor", "Copilot", "PerPlexity" ]
        }
    ]
}

const Skills  = () => {

    const { t } = useTranslation();
    return (
        <>
        <div>
            <h2
            className={`${styles.skillsHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
            >
            {t(SkillLabels.skillsHeading)}
            </h2>

            <div className={`flex items-center justify-center mx-auto p-4 flex-wrap gap-5 lg:gap-7`}>
                {SkillLabels.skillArray.map((skill) => {
                    return (
                        <div key={skill.id}>
                            <SkillCard {...skill} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
        </>
    )


}

export default Skills;