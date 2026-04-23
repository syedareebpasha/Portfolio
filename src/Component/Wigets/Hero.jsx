import React from "react";
import "./Hero.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="round-container">
      {/* <div className="hero-icons">
        <FaHtml5 className="hero-icon html" />
        <FaCss3Alt className="hero-icon css" />
        <SiJavascript className="hero-icon js" />
        <FaBootstrap className="hero-icon bootstrap" />
        <SiTailwindcss className="hero-icon tailwind" />
        <FaReact className="hero-icon react" />
      </div> */}

      <h1 className="hero-heading">
        BUILDING DIGITAL <br />
        <span>SOLUTIONS</span>
      </h1>

      <div className="hero-subtitle">
        <h5 className="subtitle-front">FRONT END DEVELOPER</h5>
        <h5 className="subtitle-react">REACT DEVELOPER</h5>
      </div>

      <p className="hero-desc">
        I'm a passionate Web Developer who loves building clean, modern, and
        beautiful user-friendly digital experiences. I focus on writing
        efficient code and turning ideas into functional, responsive websites.
      </p>

      <div className="hero-btns">
        <button className="btn-hero">Hire Me</button>
        <button className="btn-hero">View Projects</button>
      </div>
      </div>
    </div>
  );
};

export default Hero;
