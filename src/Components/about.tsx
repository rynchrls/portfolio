import { useState, forwardRef } from "react";
import "../App.scss";
import FirstSlide from "./firstSlide";
import SecondSlide from "./secondSlide";
import ThirdSlide from "./thirdSlide";

import { useStoreDispatch } from "../lib/aboutStore";
import { Actions } from "../lib/aboutslice";
import { useStoreSelector } from "../lib/aboutStore";

import prof from '../Images/profile (2).jpg'

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

const aboutDB = [
  {
      img:`${prof}`,
      title: "ABOUT ME",
      subtitle: "",
      context: "I am a driven and enthusiastic junior front-end web developer with a solid background in HTML, CSS, and JavaScript. I also have a strong desire to learn more and advance in the web development industry. My commitment lies in developing websites that are aesthetically pleasing, responsive, and easy to use. ",
      percentage: [],
      workExp: []
  },
  {
      img: "",
      title: "My Skills",
      subtitle: "",
      context: "The foundational and framework technologies I ’ve been employing to construct websites, additionally to my effectiveness.",
      percentage: [
          {
              title: "HTML5",
              percent: "90"
          },
          {
              title: "MongoDB, JSON, Rest APIs",
              percent: "85"
          },
          {
              title: "CSS3, SASS, Tailwind CSS",
              percent: "85"
          },
          {
              title: "React.js, Redux, Zustand",
              percent: "90"
          },
          {
              title: "Vanilla Javascript, JS libraries",
              percent: "90"
          },
          {
              title: "Figma",
              percent: "85"
          },
          {
              title: "Git",
              percent: "90"
          },
          {
              title: "Wordpress",
              percent: "70"
          },
          {
              title: "Github",
              percent: "90"
          },
          {
              title: "Typescript",
              percent: "60"
          }
      ],
      workExp: []
  },
  {
      img: "",
      title: "My Work Experience :",
      subtitle: "",
      context: "",
      percentage: [],
      workExp: [
          {
              title: "Front End Development, Commission based",
              date1: "August 2023",
              date2: "Present",
              skills: "HTML, CSS3, Javascript, Wordpress, Git and Github",
              description: "As a front-end web developer, I work for myself, providing clients with services like web page UI and UX design."
          },
          {
              title: "Graphic Designer, Frolic Urge Network",
              date1: "February 2023",
              date2: "August 2023",
              skills: "Figma, Canva, Photoshop and Email Design",
              description: "Back then, as an email designer, my job included making designs for the email's body and hero section banners."
          },
          {
              title: "Sales Agent, UNITOP Dasma Cavite",
              date1: "July 2022",
              date2: "January 2023",
              skills: "Marketing Strategy, Sales Management, Customer Service",
              description: "It is my responsibility to provide excellent customer service and assist customers in making purchases."
          },
          {
              title: "Data Encoder, AKBAYAN",
              date1: "January 2021",
              date2: "January 2022",
              skills: "Microsoft Excel, Spreadsheet and Data Analyst",
              description: "In my capacity as an Excel encoder, I am in charge of gathering data from our neighborhood and entering it into spreadsheets to build databases for our barangay."
          }
      ]
  }
]

const About = forwardRef<HTMLDivElement, dark>(({darkMode}, ref) => {
  const [about, setAbout] = useState<Props[]>(aboutDB);

  const dispatch = useStoreDispatch();
  const aboutStore = useStoreSelector(state => state.About.about)

  return (
    <section className={`about-section section ${darkMode ? 'about-section-dark' : ''}`} ref={ref} id="about">
      <div className="parallax">
        {aboutStore === 1 ? <FirstSlide about={about} setAbout={setAbout} /> : '' }
        {aboutStore === 2 ? <SecondSlide about={about} setAbout={setAbout}  /> : ''}
        {aboutStore === 3 ? <ThirdSlide about={about} setAbout={setAbout}  /> : ''}
      </div>
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
    </section>
  );
});

export default About;


