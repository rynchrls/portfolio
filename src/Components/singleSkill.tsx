import "../App.scss";
import { numbersForPercentage } from "./about";
import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

interface Received {
  skill: numbersForPercentage;
}

const SingleSkill: React.FC<Received> = ({ skill }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div className="skill" ref={ref}>
      <div className="skill-info">
        <h5 className="skill-name">{skill.title}</h5>
        <div className="skill-percentage">{`${skill.percent}%`}</div>
      </div>
      <div className="skill-process">
        <motion.div
          variants={{
            hidden: { width: '0%' },
            visible: { width:`${skill.percent}%` }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 0.2 }}
          className="skill-so-far"
        ></motion.div>
      </div>
    </div>
  );
};

export default SingleSkill;
