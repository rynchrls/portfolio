import React from "react";
import "../preload.scss";

interface props {
    preload: boolean
}

const PreLoader: React.FC<props> = () => {
  return (
    <div className="loading">
      <div className="i"></div>
      <div className="g"></div>
      <div className="u"></div>
    </div>
  );
};

export default PreLoader;
