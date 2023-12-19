import React from "react";
import "../App.scss";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { certification } from "./certificate";

import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

interface props {
  cert: certification;
  setAllCert: React.Dispatch<React.SetStateAction<certification[]>>;
}

const SingleCert: React.FC<props> = ({ cert }) => {
  const { img, title, skills, url } = cert;

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
      ref={ref}
      className="cert"
    >
      <img src={img} alt="cert" />
      <h5>{title}</h5>
      <p>{skills}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button>
          <div>See Certificate</div>
          <FaExternalLinkAlt />
        </button>
      </a>
    </motion.div>
  );
};

export default SingleCert;
