import "./App.scss";
import Header from "./Components/header";
import Hero from "./Components/hero";
import About from "./Components/about";
import Project from "./Components/project";
import Certificate from "./Components/certificate";
import Contact from "./Components/contact";
import { useStoreSelector } from "./lib/aboutStore";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollHome } from "./gsap/scrollAnimation";
import { scrollAbout } from "./gsap/scrollAnimation";
import { scrollProject } from "./gsap/scrollAnimation";
import { scrollCert } from "./gsap/scrollAnimation";
import { scrollContact } from "./gsap/scrollAnimation";

import PreLoader from "./Components/preloader";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollProperties = useStoreSelector((state) => state.Nav);

  const darkMode = useStoreSelector((state) => state.dark.dark);

  useEffect(() => {
    scrollHome();
    scrollAbout();
    scrollProject();
    scrollCert();
    scrollContact();
  }, [scrollProperties]);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [preload, setPreload] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0
      })
      setPreload(false);
    }, 2000);

  }, []);

  return (
    <section
      className={`default-section ${darkMode ? "default-section-dark" : ""}`}
    >
      <div className="wrapper">
        <PreLoader preload={preload} />
        <section
          className={`header-wrapper ${darkMode ? "header-wrapper-dark" : ""}`}
          style={{ zIndex: preload ? -1 : 1}}
        >
          <Header
            darkMode={darkMode}
            home={homeRef}
            about={aboutRef}
            project={projectRef}
            cert={certRef}
            contact={contactRef}
          />
        </section>
        <Hero darkMode={darkMode} ref={homeRef} />
        <About darkMode={darkMode} ref={aboutRef} />
        <Project darkMode={darkMode} ref={projectRef} />
        <Certificate darkMode={darkMode} ref={certRef} />
        <Contact darkMode={darkMode} ref={contactRef} />
      </div>
    </section>
  );
}

export default App;
