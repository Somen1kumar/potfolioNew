"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";


interface PropsInterface {
    setUpdateClass: React.Dispatch<React.SetStateAction<boolean>>;
    updateClass: boolean;
}
const desktopVideoType =
  "https://www.nescafe.com/in/themes/custom/nescafe/assets/homepage/large.mp4";
const mobileVideoType =
  "https://www.nescafe.com/in/themes/custom/nescafe/assets/homepage/small.mp4";
// const mobileVideoType =
//   "https://drive.google.com/file/d/1EJqP__zdk6zM8gPYBF7nx0FaPwZYoLc7/view?usp=drive_link";

const Labels = {
    morningFirstLabel: "Good morning!",
    morningSecondLabel: "☀️ We’re delighted to have you.",
    afternoonFirstLabel: "Good afternoon!",
    afternoonSecondLabel: "😊 We’re glad you’re here.",
    eveningFirstLabel: "Good evening!",
    eveningSecondLabel: "🌙 Relax and enjoy your time with us.",
    initialWelcomeHeading: "Welcome",
    initialWelcomePara: "The story of Somen Profile begins here.",
    heroStaticDesignation: "Software Engineer",
    heroStaticType: "Frontend Developer",
    heroStaticMessage: "A learner by heart and Software Engineer by Profession.",
    heroStaticMessage2: "Looking forward for an exciting role.",

}
function Hero(props: PropsInterface) {
    const { t } = useTranslation();
    const {setUpdateClass, updateClass} = props
  const [videoDeviceType, setDevice] = useState(desktopVideoType);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasPlayedOnScroll = useRef<boolean>(false);
  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "";
  };
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768 || width <= 1024) setDevice(mobileVideoType);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;
    lockScroll();

    const pauseAfterTime = setTimeout(() => {
      video?.pause();
      unlockScroll();
    }, 2900);
    const onVideoPlay = () => {
      if (hasPlayedOnScroll.current) return;
      lockScroll();
    // setUpdateClass(true);
      const rect = video?.getBoundingClientRect();
      if (rect && rect?.top < window.innerHeight && rect?.bottom > 0) {
        video?.play();
        unlockScroll();
        setTimeout(() => {
          setUpdateClass(true);
        },500);
        hasPlayedOnScroll.current = true;
      } else {
        video?.pause();
      }
    };
    window.addEventListener("scroll", onVideoPlay);
    return () => {
      window.removeEventListener("scroll", onVideoPlay);
      unlockScroll();
      clearTimeout(pauseAfterTime);
    };
  }, []);
  const handleLoaded = () => {
    setTimeout(() => {
      videoRef?.current?.play();
    }, 1000);
  };
  const writeMessage = (flag: boolean) => {
    const time = new Date().getHours();
    if (time >= 6 && time < 12) {
      return flag? Labels.morningFirstLabel: Labels.morningSecondLabel;
    } else if (time >= 12 && time < 18) {
      return flag ? Labels.afternoonFirstLabel : Labels.afternoonSecondLabel;
    } else {
      return flag ? Labels.eveningFirstLabel : Labels.eveningSecondLabel;
    }
  }
  return (
    <div className={styles.home_Container}>
      <div className={styles.leftAnime}>
        <div className={`${styles.welcomeStyle} text-right pr-[38%] lg:pr-[35%] -left-12.15 md:left-0 text-2xl lg:text-4xl`}>
            {writeMessage(true)}
            </div>
      </div>
      <div className={styles.rightAnime}>
        <div className={`${styles.welcomeStyle} ${styles.profileStyle} text-2xl lg:text-4xl pl-7 md:pl-7 lg:pl-12 md:text-left`}>
          {writeMessage(false)}
        </div>
      </div>
      <div className={styles.video_container}>
        <video
          ref={videoRef}
          src={videoDeviceType}
          className={styles.video_box}
          // autoPlay
          onLoadedMetadata={handleLoaded}
          muted
        ></video>
        {/*  Initial Loading Style for Welcome */}
        <div className={`${updateClass ? styles.removeInitialStyle: styles.heroLoadingStyle} absolute top-[32%] w-full `}>
            <h1 className={`${styles.heroHeadingStyle} text-5xl lg:text-7xl`}>{t(Labels.initialWelcomeHeading)}</h1>
            <p className={`${styles.heroParaStyle} text-xl lg:text-3xl `}>{t(Labels.initialWelcomePara)}</p>
        </div>
        {updateClass &&<div className={`${styles.updatedHeroStaticStyle} absolute top-[40%] w-full`}>
            <h2 className={`${styles.heroHeadingStyle} text-3xl lg:text-5xl`}>{t(Labels.heroStaticDesignation)}</h2>
            <p className={`${styles.heroParaStyle} text-xl font-bold lg:text-3xl`}>{t(Labels.heroStaticType)}</p>
            <p className={`${styles.heroParaStyle} max-w-[80%] m-auto text-md text-center lg:text-xl`}>{`${t(Labels.heroStaticMessage)}`}<span className={styles.profileStyle}>{t(Labels.heroStaticMessage2)}</span></p>
            <div className="flex m-auto pt-4"><button className={styles.aboutClassStyle}>{t("About")}</button></div>
        </div>}
      </div>
    </div>
  );
}
export default Hero;
