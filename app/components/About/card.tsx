import { useTranslation } from "react-i18next";
import style from "./styles.module.css";

interface PropsInterface {
  flag?: boolean;
  cardInfo: {
    [key: string]: string;
  };
}

const Card = (props: PropsInterface) => {
    const { t } = useTranslation();

  const { flag = false, cardInfo  } = props;
  const { heading, cardPara, expertisePara, extraInfo, expertiseLabel, expertiseNewLearning , cardParaIntro, nameLabel, languageLabel} = cardInfo;

  const extraInfoNew = extraInfo.split("{split}");//Generate AI solutions
  return (
    <div id="card-container" className={`${style.cardContainer} ${style.hideElement}  max-w-115 md:max-w-125 mx-auto lg:mx-0 border border-white/10`}>
      {heading&& <h3
        className={`${style.cardHeading} text-center text-xl font-bold pb-4 `}
      >
        {t(heading)}
      </h3>}
      {cardPara ? flag ? (
        <p className={`${style.articlePara}`}>{t(cardPara)}</p>
      ) : (
        <p className={`${style.articlePara}`}>
          {t(cardParaIntro)}
          <span className="text-[#D32F2F] font-bold">{t(nameLabel)}</span>
          {t(cardPara)}
        </p>
      ): null}
      {expertiseLabel && <div className={`${style.articleParaBox}`}>
        <div>
            <span>{t(expertiseLabel)} </span>
            <span className="text-[#D32F2F] font-bold">{t(languageLabel)}</span>
            {t(expertisePara)}</div>
      </div>}
      {!flag && extraInfoNew && <div className={`${style.articlePara}`}>
        {t(extraInfoNew[0])}
        <span className="text-[#D32F2F] font-bold">{t(expertiseNewLearning)}</span>
        {t(extraInfoNew[1])}
      </div>}
    </div>
  );
};
export default Card;
