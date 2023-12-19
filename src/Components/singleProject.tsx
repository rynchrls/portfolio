import React from "react";
import "../App.scss";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { Proj } from "./project";

import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

interface singleProj {
  project: Proj;
  setProject: React.Dispatch<React.SetStateAction<Proj[]>>;
}

const SingleProject: React.FC<singleProj> = ({ project }) => {
  const { img, title, tech, description, githubLink, video, github, url } =
    project;

  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 124 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.2, delay: 0.4 }}
      className="project"
      ref={ref}
    >
      <img src={img} alt="project" />
      <h5>{title}</h5>
      <h6>{tech}</h6>
      <p>{description}</p>
      {githubLink ? (
        <section>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="button-1-a"
          >
            <button className="button-1">
              <FaGithub />
              <div>Repository</div>
            </button>
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button-2-a"
          >
            <button className="button-2">
              <div>Live Demo</div>
              <FaExternalLinkAlt />
            </button>
          </a>
        </section>
      ) : (
        ""
      )}

      {video === "https://screenrec.com/share/5OBD8Gduct" ? (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="button-3-a"
        >
          <button className="button-3">
            <div>Demonstration</div>
            <FaExternalLinkAlt />
          </button>
        </a>
      ) : (
        ""
      )}
      {video === "https://screenrec.com/share/hrONxEHul0" ? (
        <a
          href={video}
          target="_blank"
          rel="noopener noreferrer"
          className="button-3-a"
        >
          <button className="button-3">
            <div>Demonstration</div>
            <FaExternalLinkAlt />
          </button>
        </a>
      ) : (
        ""
      )}

      {video === "true" ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="button-4-a"
        >
          <button className="button-4">
            <FaGithub />
            <div>Repository</div>
          </button>
        </a>
      ) : (
        ""
      )}
    </motion.div>
  );
};

export default SingleProject;
