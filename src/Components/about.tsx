import { useState, forwardRef } from "react";
import "../App.scss";
import { aboutDB } from "../json/about.json";

import FirstSlide from "./firstSlide";
import SecondSlide from "./secondSlide";
import ThirdSlide from "./thirdSlide";

import { useStoreDispatch } from "../lib/aboutStore";
import { Actions } from "../lib/aboutslice";
import { useStoreSelector } from "../lib/aboutStore";


export interface numbersForPercentage {
  percent: string;
  title: string;
}

export interface Work {
  title: string;
  date1: string;
  date2: string;
  skills: string;
  description: string;
}

export interface Props {
  img: string;
  title: string;
  subtitle: string;
  context: string;
  percentage: numbersForPercentage[];
  workExp: Work[];
}

interface dark {
  darkMode: boolean;
}

const About = forwardRef<HTMLDivElement, dark>(({darkMode}, ref) => {
  const [about, setAbout] = useState<Props[]>(aboutDB);

  const dispatch = useStoreDispatch();
  const aboutStore = useStoreSelector(state => state.About.about)

  return (
    <div className={`about-section ${darkMode ? 'about-section-dark' : ''}`} ref={ref}>
      <section className="parallax">
        {aboutStore === 1 ? <FirstSlide about={about} setAbout={setAbout} /> : '' }
        {aboutStore === 2 ? <SecondSlide about={about} setAbout={setAbout}  /> : ''}
        {aboutStore === 3 ? <ThirdSlide about={about} setAbout={setAbout}  /> : ''}
      </section>
      <div className="parallax-buttons">
        <button
          className={`first-slide ${aboutStore === 1 ? 'active-slide' : ''}`}
          onClick={() => {
            dispatch(
              Actions.Array1()
            );
          }}
        >
          1
        </button>
        <button className={`second-slide ${aboutStore === 2 ? 'active-slide' : ''}`} onClick={() => {
          dispatch(Actions.Array2())
        }}>2</button>
        <button className={`third-slide ${aboutStore === 3 ? 'active-slide' : ''}`} onClick={() => {
          dispatch(Actions.Array3())
        }}>3</button>
      </div>
    </div>
  );
});

export default About;


