import { forwardRef } from "react";
import "../App.scss";
import hero from '../Images/final .png'
import { useStoreDispatch } from "../lib/aboutStore";
import { Action } from "../lib/darkmodeSlice";

interface props {
  darkMode: boolean;
}

const RESUME_FILE_URL: string = 'https://rynchrls.github.io/portfolio/ryan_charles_alcaraz.docx'

const Hero = forwardRef<HTMLDivElement, props>(({darkMode}, ref) => {

  const dispatch = useStoreDispatch()

  const downloadFileatURL = (url: string) => {
    const aTag = document.createElement("a")
    aTag.href = url;
    aTag.setAttribute("download", 'ryan_charles_alcaraz.docx');
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove()

  }

  return (
    <section className={`hero-section section ${darkMode ? 'hero-section-dark' : ''}`} ref={ref} id="hero" >
      <header className="hero-header">
        <div className="mode">
          <span className="light" onClick={() => dispatch(Action.lightMode())}>Light</span>
          <div className="hero-line"></div>
          <span className="dark" onClick={() => dispatch(Action.darkMode())}>Dark</span>
        </div>
        <h1 className="h3-light">Portfolio</h1>
      </header>
      <div className="hero">
        <div className="left-hero">
          <p className="hero-p">Hello there!</p>
          <h2 className="h3-light">I'm Ryan,</h2>
          <h1 className="h1-light">
            a <span>Front End</span>
          </h1>
          <h2 className="h3-light">Web Developer</h2>
          <p className="p-light margin">
            A driven and aspirational junior front-end developer from the
            Philippines who used technology to dominate the web development
            industry.
          </p>
          <section className="hero-buttons">
            <button className="first-hero-button" onClick={() => downloadFileatURL(RESUME_FILE_URL)}>Download CV</button>
            <button className="second-hero-button" onClick={() => {
              const about = document.querySelector('.about-section')
              window.scrollTo({
                top: about?.getBoundingClientRect().top,
                behavior: 'smooth'
              })
            }}>Learn More</button>
          </section>
        </div>
        <div className="right-hero">
          <img src={hero} width={500} />
        </div>
      </div>
    </section>
  );
});

export default Hero;
