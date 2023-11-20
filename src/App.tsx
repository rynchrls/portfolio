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

import PreLoader from "./Components/preloader";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const darkMode = useStoreSelector((state) => state.dark.dark);

  useEffect(() => {
    let sec = document.querySelectorAll('section');
    let links = document.querySelectorAll('nav a');


    window.onscroll = () => {

      sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          links.forEach(link => {
            link.classList.remove('active');
            document
              .querySelector('nav a[href*=' + id + ']')
              ?.classList.add('active');
          });
        }
      });
    };
  }, [0]);

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
        left: 0,
      });
      setPreload(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`default-section ${darkMode ? "default-section-dark" : ""}`}
    >
      <div className="wrapper">
        <PreLoader preload={preload} />
        <div
          className={`header-wrapper ${darkMode ? "header-wrapper-dark" : ""}`}
          style={{ zIndex: preload ? -1 : 1 }}
        >
          <Header
            darkMode={darkMode}
            home={homeRef}
            about={aboutRef}
            project={projectRef}
            cert={certRef}
            contact={contactRef}
          />
        </div>
        <Hero darkMode={darkMode} ref={homeRef} />
        <About darkMode={darkMode} ref={aboutRef} />
        <Project darkMode={darkMode} ref={projectRef} />
        <Certificate darkMode={darkMode} ref={certRef} />
        <Contact darkMode={darkMode} ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
