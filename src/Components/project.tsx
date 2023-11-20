import { useState, forwardRef } from "react";
import SingleProject from "./singleProject";
import proj from "../json/project.json";

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

interface dark {
  darkMode: boolean;
}

const Project  = forwardRef<HTMLDivElement, dark>(({darkMode}, ref) => {
  const [project, setProject] = useState<Proj[]>(proj.projectDB);

  return (
    <div className={`project-section ${darkMode ? 'project-section-dark' : ''}`} ref={ref} >
      <div className="project-header">
        <h2 className="h2-light">Personal Projects</h2>
        <p className="p-light">
          Various web applications that I developed while I was learning.
        </p>
      </div>
      <section className="project-wrapper">
        {project.map((proj) => (
          <SingleProject project={proj} setProject={setProject} key={proj.id} />
        ))}
      </section>
    </div>
  );
});

export default Project;
