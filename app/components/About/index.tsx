import { useTranslation } from "react-i18next";
import Card from './card'
import styles from './styles.module.css'


const AboutLabel = {
    headingLabel : "About Me",
    mainPara: "Experienced Frontend Developer with overall 5 years of expertise in crafting interactive web applications. Proven track record of delivering impactful features while maintaining code quality. Skilled in collaborating with cross functional teams for timely project delivery. Effective problem solver with strong communication skills and a quick adaptability to new technologies. ",
    paraLabel : "Crafting innovative solutions with passion, precision, and purpose",
    cardOneProp: {
        heading: "My Journey",
        cardParaIntro: "Hi, I'm ",
        nameLabel: "Somen Kumar ✨",
        cardPara: " - a dynamic and deeply driven Software Development Engineer who transforms complex challenges into elegant solutions.",
        expertiseLabel: "My expertise spans",
        languageLabel: "`JavaScript, TypeScript and C++, `",
        expertisePara: " built on rock-solid foundations in data structures, algorithms, and object-oriented programming.",
        expertiseNewLearning: "Generate AI solutions",
        extraInfo: "🔬 Beyond coding, I'm passionate about learning {split}  and creating meaningful impact through technology — particularly in developing solutions for business transformation to digital."
    },
    cardOneProp2: {
        heading: "What I Do",
        cardParaIntro: "🚀 My superpower?",
        nameLabel: " Rapid adaptation ",
        cardPara: " to any technology stack! Currently diving deep into Next.js and NodeJs, exploring how tech giants scale their masterpieces.",
        expertiseLabel: "💡 Looking for an",
        languageLabel: "adaptable and Innovative Front End Developer",
        expertisePara: " Let's collaborate and build something extraordinary together! ",
        extraInfo: "🔬 I love bringing ideas to life in the browser by combining clean design with efficient front-end code. My goal is to build interfaces that not only look good but also feel intuitive and smooth to use."
    }
}
const About = () => {
    const { t } = useTranslation();

    //    justify-content: space-evenly;

    return <div className={`px-8 ${styles.hideElement}`}>
       <div>
        <h2 
        style={{ "--i": 0 } as React.CSSProperties}
         className={`${styles.aboutHeadingStyle} ${styles.hideElement} text-3xl pb-4 lg:pb-8 lg:text-5xl`}>{t(AboutLabel.headingLabel)}</h2>
        <p
        style={{ "--i": 1 } as React.CSSProperties}
        className={`${styles.aboutPara} ${styles.hideElement} text-md lg:text-xl `}>{t(AboutLabel.mainPara)}</p>
       </div>
       <div className='lg:flex lg:flex-wrap lg:gap-4 lg:justify-evenly'>
        <div
        style={{ "--i": 2 } as React.CSSProperties}
        ><Card cardInfo={AboutLabel.cardOneProp}/></div>
        <div
        style={{ "--i": 3 } as React.CSSProperties}
        ><Card cardInfo={AboutLabel.cardOneProp2}/></div>

       </div>
    </div>
}


export default About;