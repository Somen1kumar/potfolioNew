
import { useTranslation } from "react-i18next";
import { Github, SquareArrowOutUpRight } from 'lucide-react';
import style from "./styles.module.css";

interface PropsInterface {
  flag?: boolean;
  cardInfo: {
    [key: string]: string;
  };
}

const Card = (props: PropsInterface) => {
    const { t } = useTranslation();
  const {  cardInfo  } = props;
  const { heading, cardPara, techStackUse, githubLink , projectLink} = cardInfo;

  return (
    <div id="projectCard-container" className={`${style.cardContainer} ${style.projectCardStyle} max-w-5xl my-4 mx-auto `}>
      {heading && <h3
        className={`${style.cardHeading} text-center text-xl font-bold pb-4 `}
      >
        {t(heading)}
      </h3>}
      {cardPara &&
        <p className={`${style.articlePara}`}>{t(cardPara)}</p>}
      {techStackUse && <div className={`${style.articleParaBox}`}>
        <div>
            <p className="text-[#D32F2F] font-bold">{t(techStackUse)}</p>
        </div>
      </div>}
      <div className='flex flex-row gap-4 justify-center mx-auto'>
      {
        githubLink && <div className=' w-fit bg-[#d32f2f] rounded-4xl p-3'><a href={githubLink}>
            <span><Github className="text-white" fill='#fff' /></span>
        </a></div>
      }
      {
        projectLink && <div className=' w-fit bg-[#d32f2f] rounded-4xl p-3'><a href={projectLink}>
            <span><SquareArrowOutUpRight className="text-white"  /></span>
        </a></div>
      }
      </div>
    </div>
  );
};
export default Card;
