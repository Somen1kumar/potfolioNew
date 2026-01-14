
import { useTranslation } from "react-i18next";
import ProjectCard from './projectCard';
import styles from "./styles.module.css";

const ProjectLabels = {
  skillsHeading: "Projects",
  projectArray: [
    {
        heading: "NetflixGPT - Your Ultimate Movie Companion!",
        cardPara: "NetflixGPT combines the power of AI with a rich movie discovery experience, allowing users to search for any movie using a GPT-driven engine that recommends films tailored to their interests. The platform offers comprehensive movie information, including trailers, cast details, and more, so users can make informed viewing choices. Designed to be fully device-friendly, NetflixGPT delivers a seamless experience across desktops, tablets, and smartphones. It also ensures secure access through user authentication with easy login, signup, and password recovery. On the homepage, users can explore diverse movie categories such as Now Playing, Discover, Top Rated, and Popular, all powered by The Movie Database (TMDB) API.",
        techStackUse: "React, Redux, Tailwind CSS, Firebase, TMDB API, Vite, React Router, Firebase Authentication, Open AI, Vercel",
        githubLink: "https://github.com/Somen1kumar/netflixGPT",
        projectLink: "https://netflixgpt-5505d.web.app "
    }
  ]
};

const Projects = () => {
    const { t } = useTranslation();
  return (
    <div>
      <div>
        <h2
          className={`${styles.projectHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(ProjectLabels.skillsHeading)}
        </h2>
      </div>
      <div className='p-4 pt-0'>
        <ProjectCard cardInfo = {ProjectLabels.projectArray[0]}/>
      </div>
    </div>
  );
};
export default Projects;