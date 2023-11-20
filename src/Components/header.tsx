import React from "react";
import "../App.scss";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaAward } from "@react-icons/all-files/fa/FaAward";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { useStoreDispatch } from "../lib/aboutStore";
// import { Action } from "../lib/headerFunc";

interface props {
  darkMode: boolean;
  home: React.RefObject<HTMLDivElement>;
  about: React.RefObject<HTMLDivElement>;
  project: React.RefObject<HTMLDivElement>;
  cert: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<props> = ({ darkMode }) => {
  // const dispatch = useStoreDispatch()

  return (
    <nav className={`header-section ${darkMode ? "header-section-dark" : ""}`}>
      <div className={`nav-side ${darkMode ? "nav-side-dark" : ""}`}>
        <GiHamburgerMenu />
        <h5 className="nav">Navigation</h5>
      </div>
        <a href="#hero" className={`links ${darkMode ? "links-dark " : ""} h active`}>
          <FaHome />
          <h5 className="nav-links">Home</h5>
        </a>
        <a href="#about" className={`links ${darkMode ? "links-dark" : ""} h`}>
          <FaUser />
          <h5 className="nav-links">About</h5>
        </a>
        <a href="#project" className={`links ${darkMode ? "links-dark" : ""} h`}>
          <FaCode />
          <h5 className="nav-links">Project</h5>
        </a>
        <a href="#cert" className={`links ${darkMode ? "links-dark" : ""} h`}>
          <FaAward />
          <h5 className="nav-links">Certificate</h5>
        </a>
        <a href="#contact" className={`links ${darkMode ? "links-dark" : ""} h`}>
          <FaPhoneAlt />
          <h5 className="nav-links">Contact</h5>
        </a>
      <div className={`line ${darkMode ? "line-dark" : ""}`}>
        <div></div>
      </div>
      {/* <div
        className={`links-account-wrapper ${
          darkMode ? "links-account-wrapper-dark" : ""
        }`}
      >
        <a href="https://www.facebook.com/ryan.alcaraz.370" target="_blank" rel="noopener noreferrer">
          <div className="links-account">
            <FaFacebookF />
            <h5>Facebook</h5>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/ryan-charles-alcaraz-582650295/" target="_blank" rel="noopener noreferrer">
          <div className="links-account">
            <FaLinkedinIn />
            <h5>Linkedin</h5>
          </div>
        </a>
        <a href="https://github.com/rynchrls" target="_blank" rel="noopener noreferrer">
          <div className="links-account">
            <FaGithub />
            <h5>Github</h5>
          </div>
        </a>
      </div> */}
    </nav>
  );
};

export default Header;
