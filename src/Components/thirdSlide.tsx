import React from "react";
import { Props } from "./about";
import SingleWork from "./singleWork";

interface Received {
  about: Props[];
  setAbout: React.Dispatch<React.SetStateAction<Props[]>>;
}

const ThirdSlide: React.FC<Received> = ({ about }) => {
  return (
    <div className="third-slide-wrapper">
      <h2 className="h2-light">My Work Experience :</h2>
      <section className="work-wrapper">
        <div className="timeline-wrapper">
          {about[2].workExp.map((work) => (
            <SingleWork aboutWork={work} key={work.skills} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ThirdSlide;
