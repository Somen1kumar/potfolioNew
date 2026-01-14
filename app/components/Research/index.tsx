
import { useTranslation } from "react-i18next";
import PublicationCard from './researchCard'
import styles from "./styles.module.css";

const ResearchLabels = {
  skillsHeading: "Research",
};

const Projects = () => {
    const { t } = useTranslation();
  return (
    <div>
      <div>
        <h2
          className={`${styles.projectHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(ResearchLabels.skillsHeading)}
        </h2>
      </div>
      <div className='p-4 pt-0'>
        <PublicationCard />
      </div>
    </div>
  );
};
export default Projects;