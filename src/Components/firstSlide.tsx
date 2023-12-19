import React, { useRef, useEffect } from "react";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { Props } from "./about";

import { useInView, motion, useAnimation } from "framer-motion";

interface Received {
  about: Props[];
  setAbout: React.Dispatch<React.SetStateAction<Props[]>>;
}

const FirstSlide: React.FC<Received> = ({ about }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div className="about-section-wrapper" ref={ref}>
      <div className="img-left">
        <motion.img
          style={{ position: "relative" }}
          variants={{
            hidden: { opacity: 0, x: -64 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.4 }}
          src={about[0].img}
        />
      </div>
      <div className="context-right">
        <motion.h2
          style={{ position: "relative" }}
          variants={{
            hidden: { opacity: 0, y: -64 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: .8, delay: 0.4 }}
        >
          {about[0].title}
        </motion.h2>
        <motion.p
          style={{ position: "relative" }}
          variants={{
            hidden: { opacity: 0, x: 64 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {about[0].context}
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: .7 }}
        ></motion.div>
      </div>
      <motion.span
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: .7 }}
        className="react"
      >
        <FaReact />
      </motion.span>
    </div>
  );
};

export default FirstSlide;
