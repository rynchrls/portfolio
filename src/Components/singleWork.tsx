import React from "react";
import "../App.scss";
import { Work } from "./about";

interface Received {
  aboutWork: Work;
}

const SingleWork: React.FC<Received> = ({ aboutWork }) => {


  return (
    <div className="work">
      <h5 className="h4-light">{aboutWork.title}</h5>
      <div className="work-date">
        <p className="p-light">{aboutWork.date1}</p>
        <div></div>
        <p className="p-light">{aboutWork.date2}</p>
      </div>
      <p className="p-light">
        {aboutWork.description}
      </p>
      <span>{aboutWork.skills}</span>
    </div>
  );
};

export default SingleWork;
