"use client";
import { useEffect, useState } from "react";
import GlobalHeader from "./components/globalHeader";
import Hero from "./components/Hero";
import About from "./components/About/index";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Footer from "./components/Footer";
import styles from "./home.module.css";

export default function Home() {
  const [updateClass, setUpdateClass] = useState(false);
  const [activeSection1, setActiveSection] = useState("profile");

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
   const handleScroll = () => {
      const sections = [
        "profile",
        "about",
        "work",
        "education",
        "skills",
        "projects",
        "research",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document?.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateClass]);

  return (
    <div className={styles.home_Container}>
      <div className="fixed z-10 w-full pt-7">
        <GlobalHeader activeSection={activeSection1} />
      </div>
      <>
        <section id="profile" className={styles.video_container}>
          <Hero setUpdateClass={setUpdateClass} updateClass={updateClass} />
        </section>
      </>
      {
        <>
          <section id="about" className="boxView mt-9">
            <About />
          </section>
          <section id="work" className="boxView mt-9">
            <Experience />
          </section>
          <section id="education" className="boxView mt-9">
            <Education />
          </section>
          <section id="skills" className="boxView mt-9">
            <Skills />
          </section>
          <section id="projects" className="boxView mt-9">
            <Projects />
          </section>
          <section id="research" className="boxView mt-9">
            <Research />
          </section>
          <section id="contact" className="boxView mt-9">
            <Footer />
          </section>
        </>
      }
      <div className={styles.homeLogo}>
        <span className="w-fit h-fit m-auto text-3xl font-bold"></span>
      </div>
    </div>
  );
}
