import FooterCard from './footerCard';
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

const ProjectLabels = {
    footerLabel: "Let's Connect",
    para: "Ready to collaborate on something amazing? Let's turn ideas into reality together.",
    footerArray: [
        {
            id:141,
            Logo: "github",
            cardInfo: "GitHub",
            Para: "Explore my projects and contributions on GitHub.",
            link: "https://github.com/Somen1kumar"
        },
        {
            id:142,
            Logo: "linkedin",
            cardInfo: "LinkedIn",
            Para: "Connect with me on LinkedIn to explore opportunities and collaborations.",
            link: "https://www.linkedin.com/in/somen-kumar"
        },
        {
            id:143,
            Logo: "Mail",
            cardInfo: "Email",
            Para: "Reach out to me via email for any inquiries or collaborations.",
            link: "mailto:somenkumar8601@gmail.com"
        }
    ]

}

const Footer = () => {
    const {t}= useTranslation();
  return (
    <div>
      <div>
        <h2
          className={`${styles.projectHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}
        >
          {t(ProjectLabels.footerLabel)}
        </h2>
        <p className={`${styles.aboutPara} text-center text-md lg:text-xl `}>{t(ProjectLabels.para)}</p>
        <div>
            <div className={`flex items-center justify-center mx-auto p-4 flex-wrap gap-5 lg:gap-7`}>
                {ProjectLabels.footerArray.map((card) => {
                    return (
                        <div key={card.id} className={`${styles.projectCardStyle} w-[80%] h-75 md:w-[30%]`}>
                            <FooterCard {...card} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
      </div>
      
    </div>
  );
};
export default Footer;