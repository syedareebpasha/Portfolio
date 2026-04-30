import React, { useEffect } from "react";
import "./Loader.css";

const IntroLoader = () => {
  useEffect(() => {
    const name = document.querySelector(".name");
    const intro = document.querySelector(".intro-loader");

    const nameTimer = setTimeout(() => {
      if (name) {
        name.style.opacity = "1";
        name.style.transform = "translateY(0)";
      }
    }, 300);

    const introTimer = setTimeout(() => {
      if (intro) {
        intro.style.top = "-110%";
      }
    }, 2000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(introTimer);
    };
  }, []);

  return (
    <div className="intro-loader">
      <h1 className="name">SYED AREEB PASHA.</h1>
    </div>
  );
};

export default IntroLoader;
