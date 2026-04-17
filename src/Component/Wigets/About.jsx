import React from 'react'
import "./About.css"
import IconDiv from '../Shared/IconDiv'
import { GiPolarStar } from "react-icons/gi"
import Button from '../Shared/Button'
import { FaDownload } from "react-icons/fa6";


const About = () => {
  return (
    <div className="about-section" id="About">

      <div className="about-heading">
        <h3 className="about-sub">
          <IconDiv color="white" icon={GiPolarStar} color={"black"} />
          KNOW MORE ABOUT ME
        </h3>
        <h1 className="about-title">Get To Know Me</h1>
      </div>

      <hr className="about-divider" />

      <div className="about-content">

        <div className="about-exp">
          <h1 className="exp-num">
            05<span className="exp-plus">+</span>
          </h1>
          <h5 className="exp-label">MONTHS OF <br /> EXPERIENCE</h5>
        </div>

        <div className="about-text">
          <p className="about-desc">
            I specialize in front-end development and love working with HTML,
            CSS, JavaScript, and modern frameworks. I also pay deep attention
            to UI/UX so every project not only works smoothly but also feels
            great to use. Whether it's a landing page, portfolio, or full
            website, I always aim for quality and performance.
          </p>

          <p className="about-goal">
            My goal is simple — to keep learning, improving, and creating
            meaningful web experiences. I'm always excited to collaborate,
            explore new technologies, and bring creative ideas to life.
          </p>

          <div className="about-btns">
            <Button text="KNOW MORE"     className="btn-hero" />
            <Button text="DOWNLOAD CV" icon={FaDownload}  className="btn-hero" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About