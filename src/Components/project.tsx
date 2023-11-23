import { useState, forwardRef } from "react";
import SingleProject from "./singleProject";

import school from '../Images/Eskwela.png'
import crypto from '../Images/crypto.png'
import weddie from '../Images/weddie.png'
import nike from '../Images/Nike.png'
import list from '../Images/todolist.png'
import pelicula from '../Images/pelicula.png'
import forms from '../Images/forms.png'

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
  githubOnly: boolean
}

const projectDB = [
  {
      id: 1,
      img: `${school}`,
      title: "School Admin Dashboard",
      tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand",
      description: "A school administration website can be set up to meet the needs of each institution in a personalized way. ",
      githubLink: true,
      github: "https://github.com/rynchrls/admin-dashboard",
      url: "https://rynchrls.github.io/admin-dashboard/",
      video: "false",
      githubOnly: false
  },
  {
      id: 3,
      img: `${weddie}`,
      title: "Weddie",
      tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, zustand and RESTful API",
      description: "An application that connects to a reliable API and lets users search for the most recent weather information for a particular location worldwide.",
      githubLink: true,
      github: "https://github.com/rynchrls/weather-app",
      url: "https://rynchrls.github.io/weather-app/",
      video: "false",
      githubOnly: false

  },
  {
      id: 4,
      img: `${nike}`,
      title: "Nike Landing Page",
      tech: "Tech used: React.js, Sass, CSS3, HTML, Javascript, redux, Three.js and WebGL",
      description: "A straightforward Nike landing page that displays a 3D object within the online application.",
      githubLink: true,
      github: "https://github.com/rynchrls/nike",
      url: "https://rynchrls.github.io/nike/",
      video: "false",
      githubOnly: false

  },
  {
      id: 5,
      img: `${list}`,
      title: "Todo List",
      tech: "Tech used: HTML5, CSS3, Javascript and js libraries.",
      description: "A straightforward online to-do list tool that manages your tasks for the day, week, month, and year.",
      githubLink: false,
      github: "https://github.com/rynchrls/Todolist",
      url: "",
      video: "true",
      githubOnly: true
  },
  {
      id: 6,
      img: `${pelicula}`,
      title: "PELICULA",
      tech: "Tech used: HTML5, CSS3, Javascript,RESTful API and js libraries.",
      description: "An application for a movie website that lets users browse and immediately begin watching their favorite film; additionally, you can store all the movies you wish to watch at a later time and create your own video library with.",
      githubLink: false,
      github: "",
      url: "",
      video: "https://screenrec.com/share/5OBD8Gduct",
      githubOnly: false
  },
  {
      id: 7,
      img: `${forms}`,
      title: "School Forms",
      tech: "Tech used: HTML5, CSS3, Javascript and js libraries.",
      description: "For a project for one of my clients, I made a simple login and enrollment form using javascript, html, and CSS.",
      githubLink: false,
      github: "",
      url: "",
      video: "https://screenrec.com/share/hrONxEHul0",
      githubOnly: false
  }
]

interface dark {
  darkMode: boolean;
}

const Project  = forwardRef<HTMLDivElement, dark>(({darkMode}, ref) => {
  const [project, setProject] = useState<Proj[]>(projectDB);

  return (
    <section className={`project-section section ${darkMode ? 'project-section-dark' : ''}`} ref={ref} id="project" >
      <div className="project-header">
        <h2 className="h2-light">Personal Projects</h2>
        <p className="p-light">
          Various web applications that I developed while I was learning.
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
