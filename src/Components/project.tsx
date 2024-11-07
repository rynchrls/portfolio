import { useState, forwardRef } from "react";
import SingleProject from "./singleProject";

import school from "../Images/Eskwela.png";
import weddie from "../Images/weddie.png";
import nike from "../Images/Nike.png";
import list from "../Images/todolist.png";
import pelicula from "../Images/pelicula.png";
import remimicpng from "../Images/remimicpng.png";
import skillura from "../Images/skillura.png";

export interface Proj {
  id: number;
  img: string;
  title: string;
  tech: string;
  description: string;
  githubLink: boolean;
  github: string;
  url: string;
  video: string;
  githubOnly: boolean;
}

const projectDB = [
  {
    id: 1,
    img: `${school}`,
    title: "School Admin Dashboard",
    tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand",
    description:
      "A school administration website can be set up to meet the needs of each institution in a personalized way. ",
    githubLink: true,
    github: "https://github.com/rynchrls/admin-dashboard",
    url: "https://rynchrls.github.io/admin-dashboard/",
    video: "false",
    githubOnly: false,
  },
  {
    id: 2,
    img: `${weddie}`,
    title: "Weddie",
    tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand and RESTful API",
    description:
      "An application that connects to a reliable API and lets users search for the most recent weather information for a particular location worldwide.",
    githubLink: true,
    github: "https://github.com/rynchrls/weather-app",
    url: "https://rynchrls.github.io/weather-app/",
    video: "false",
    githubOnly: false,
  },
  {
    id: 3,
    img: `${nike}`,
    title: "Nike Landing Page",
    tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, Three.js and WebGL",
    description:
      "A straightforward Nike landing page that displays a 3D object within the online application.",
    githubLink: true,
    github: "https://github.com/rynchrls/nike",
    url: "https://rynchrls.github.io/nike/",
    video: "false",
    githubOnly: false,
  },
  {
    id: 4,
    img: `${list}`,
    title: "Todo List",
    tech: "Tech used: HTML5, CSS3, Javascript and js libraries.",
    description:
      "A straightforward online to-do list tool that manages your tasks for the day, week, month, and year.",
    githubLink: false,
    github: "https://github.com/rynchrls/Todolist",
    url: "",
    video: "true",
    githubOnly: true,
  },
  {
    id: 5,
    img: `${pelicula}`,
    title: "PELICULA",
    tech: "Tech used: HTML5, CSS3, Javascript,RESTful API and js libraries.",
    description:
      "An application for a movie website that lets users browse and immediately begin watching their favorite film; additionally, you can store all the movies you wish to watch at a later time and create your own video library with.",
    githubLink: false,
    github: "",
    url: "",
    video: "https://screenrec.com/share/5OBD8Gduct",
    githubOnly: false,
  },
  {
    id: 6,
    img: `${remimicpng}`,
    title: "Remimic",
    tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand and RESTful API",
    description:
      "Remimic allows user to generate deepfaking images and voice cloning, it's actually artificial intelligence that helps the user to copy an image or a voice actor even a video, for their tiktok or instagram content creation.",
    githubLink: true,
    github: "false",
    url: "https://remimic.com/",
    video: "false",
    githubOnly: false,
  },
  {
    id: 7,
    img: `${skillura}`,
    title: "Skillura",
    tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand and RESTful API",
    description:
      "This web application is software as a service apps that allow the agencies to train their potential employees and create different kind of exams, call interview and a chat simulation this application is all in one for trainers.",
    githubLink: true,
    github: "false",
    url: "https://skillura.com/",
    video: "false",
    githubOnly: false,
  },
];

interface dark {
  darkMode: boolean;
}

const Project = forwardRef<HTMLDivElement, dark>(({ darkMode }, ref) => {
  const [project, setProject] = useState<Proj[]>(projectDB);

  return (
    <section
      className={`project-section section ${
        darkMode ? "project-section-dark" : ""
      }`}
      ref={ref}
      id="project"
    >
      <div className="project-header">
        <h2 className="h2-light">Projects</h2>
        <p className="p-light">
          Both on my own and for clients, I have created a variety of expert web
          apps that are suited to particular requirements and provide
          outstanding user experiences.
        </p>
      </div>
      <div className="project-wrapper">
        {project.map((proj) => (
          <SingleProject project={proj} setProject={setProject} key={proj.id} />
        ))}
      </div>
    </section>
  );
});

export default Project;
