import React from "react";
import { Props } from "./about";
import SingleSkill from "./singleSkill";


interface Received {
  about: Props[];
  setAbout: React.Dispatch<React.SetStateAction<Props[]>>;
}

const SecondSlide: React.FC<Received> = ({ about }) => {
  return (
    <div className="second-slide-wrapper">
      <div className="second-slide-header">
        <h2 className="h2-light">{about[1].title}</h2>
        <p className="p-light">{about[1].context}</p>
      </div>
      <div className="skills-section">
        {about[1].percentage.map(skill => (
          <SingleSkill skill={skill} key={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default SecondSlide;
