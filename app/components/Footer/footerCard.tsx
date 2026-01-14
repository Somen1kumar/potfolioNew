import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

interface PropsInterface {
  Logo: string;
  cardInfo: string;
  Para: string;
  link: string | undefined;
}

const FooterCard = (props: PropsInterface) => {
    const { t } = useTranslation();
  const { Logo, cardInfo, Para, link } = props;

  const LogoReturn = (logo: string) => {
    let a = <Github className="text-white" fill='#fff' />;
    switch (logo) {
      case "github":
        a = <div className={styles.logoIconGithub}><Github className="text-white" fill={'#fff'} /></div>;
        break;
      case "linkedin":
        a = <div className={styles.linkedIn}><Linkedin className="text-white" fill='#fff'/></div>;
        break;
      default:
        a = <div className={styles.logoMail}><Mail className="text-white" /></div>;
        break;
    }
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
        {a}
      </div>
    );
  };
  return (
    <>
      <a href={link}>
        <div className="flex flex-col justify-center text-center items-center relative gap-4 top-[24%]">
            {/* <span className="flex justify-center w-12 h-12 rounded-4xl ">{LogoReturn(Logo)}</span> */}
            <div className={` w-fit ${Logo === "linkedin" ? styles.linkedIn : styles.logoIcon} bg-black rounded-4xl p-3`}>
            <span>{LogoReturn(Logo)}</span>
        </div>
            <h3 className={`${styles.logoIcon} text-2xl font-semibold`}>{t(cardInfo)}</h3>
            <p className="text-sm text-gray-600">{t(Para)}</p>
        </div>
      </a>
    </>
  );
};

export default FooterCard;
