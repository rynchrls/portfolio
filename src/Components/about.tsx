import { useState, forwardRef } from "react";
import "../App.scss";
import FirstSlide from "./firstSlide";
import SecondSlide from "./secondSlide";
import ThirdSlide from "./thirdSlide";

import { useStoreDispatch } from "../lib/aboutStore";
import { Actions } from "../lib/aboutslice";
import { useStoreSelector } from "../lib/aboutStore";

import prof from "../Images/profile(2).png";

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
    img: `${prof}`,
    title: "ABOUT ME",
    subtitle: "",
    context:
      "I have experience with the MERN stack (MongoDB, Express, React, and Node.js) and am a passionate and committed full-stack web developer. I have a solid background in both front-end and back-end development, and I know how to make web apps that are responsive, smooth, and easy to use. I can create comprehensive, effective, and scalable solutions since I have practical experience with RESTful APIs and third-party API connections. My objective is to keep learning new things and helping to create high-caliber, useful apps that improve user experience.",
    percentage: [],
    workExp: [],
  },
  {
    img: "",
    title: "My Skills",
    subtitle: "",
    context:
      "The foundational and framework technologies I ’ve been employing to construct websites, additionally to my effectiveness.",
    percentage: [
      {
        title: "HTML5",
        percent: "90",
      },
      {
        title: "MongoDB, JSON, Rest APIs",
        percent: "90",
      },
      {
        title: "CSS3, SASS, Tailwind CSS",
        percent: "90",
      },
      {
        title: "React.js, Redux, Zustand",
        percent: "90",
      },
      {
        title: "Vanilla Javascript, JS libraries",
        percent: "90",
      },
      {
        title: "Figma",
        percent: "85",
      },
      {
        title: "Git",
        percent: "90",
      },
      {
        title: "Wordpress",
        percent: "70",
      },
      {
        title: "Github",
        percent: "90",
      },
      {
        title: "Typescript",
        percent: "60",
      },
      {
        title: "Node.js/Express.js",
        percent: "85",
      },
      {
        title: "Docker",
        percent: "85",
      },
      {
        title: "Nginx",
        percent: "85",
      },
      {
        title: "Web Designing",
        percent: "85",
      },
    ],
    workExp: [],
  },
  {
    img: "",
    title: "My Work Experience :",
    subtitle: "",
    context: "",
    percentage: [],
    workExp: [
      {
        title: "Lead And Full Stack Developer",
        date1: "January 2024",
        date2: "October 2024",
        skills:
          "React.js, Node.js/Express.js, MongoDb, Docker, Nginx,Jira,Git CLI and Github, Vercel, Production, Devops, Deployment",
        description:
          "As a backend developer, I design and implement server-side logic, ensuring seamless communication between databases, APIs, and front-end applications. My focus is on building scalable, secure, and efficient systems that support the overall functionality of the application.",
      },
      {
        title: "Lead Developer",
        date1: "April 2023",
        date2: "December 2023",
        skills:
          "React.js, Node.js/Express.js, MongoDb, Docker, Nginx, Git and Github",
        description:
          "I supervise the development process and make sure the team is on board with the project's objectives in my capacity as lead developer. In order to produce excellent results, I concentrate on increasing efficiency and productivity while encouraging teamwork.",
      },
      {
        title: "Front End Development, Commission based",
        date1: "August 2022",
        date2: "December 2022",
        skills: "HTML, CSS3, Javascript, Wordpress, Git and Github",
        description:
          "As a front-end web developer, I work for myself, providing clients with services like web page UI and UX design.",
      },
      {
        title: "Graphic Designer, Frolic Urge Network",
        date1: "February 2022",
        date2: "August 2022",
        skills: "Figma, Canva, Photoshop and Email Design",
        description:
          "Back then, as an email designer, my job included making designs for the email's body and hero section banners.",
      },
    ],
  },
];

const About = forwardRef<HTMLDivElement, dark>(({ darkMode }, ref) => {
  const [about, setAbout] = useState<Props[]>(aboutDB);

  const dispatch = useStoreDispatch();
  const aboutStore = useStoreSelector((state) => state.About.about);

  return (
    <section
      className={`about-section section ${
        darkMode ? "about-section-dark" : ""
      }`}
      ref={ref}
      id="about"
    >
      <div className="parallax">
        {aboutStore === 1 ? (
          <FirstSlide about={about} setAbout={setAbout} />
        ) : (
          ""
        )}
        {aboutStore === 2 ? (
          <SecondSlide about={about} setAbout={setAbout} />
        ) : (
          ""
        )}
        {aboutStore === 3 ? (
          <ThirdSlide about={about} setAbout={setAbout} />
        ) : (
          ""
        )}
      </div>
      <div className="parallax-buttons">
        <button
          className={`first-slide ${aboutStore === 1 ? "active-slide" : ""}`}
          onClick={() => {
            dispatch(Actions.Array1());
          }}
        >
          1
        </button>
        <button
          className={`second-slide ${aboutStore === 2 ? "active-slide" : ""}`}
          onClick={() => {
            dispatch(Actions.Array2());
          }}
        >
          2
        </button>
        <button
          className={`third-slide ${aboutStore === 3 ? "active-slide" : ""}`}
          onClick={() => {
            dispatch(Actions.Array3());
          }}
        >
          3
        </button>
      </div>
    </section>
  );
});

export default About;
