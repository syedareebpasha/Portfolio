import React from 'react'
import "./About.css"
import Button from '../Shared/Button'
import { FaDownload } from "react-icons/fa6"
import CV from '../../assets/Syed_Areeb_Pasha_CV.pdf'


const skills = ['React.js', 'JavaScript', 'HTML', 'CSS','Tailwind', 'UI/UX', 'Git', 'GitHub']

const About = () => {
  return (
    <div className="about-section" id="About">

      <div className="about-eyebrow">
        <span className="about-eline" />
        Know more about me
        <span className="about-eline" />
      </div>

      <div className="about-grid">

        {/* LEFT — Big Number */}
        <div className="about-left">
          <div className="about-exp-wrap">
            <div className="about-num-ghost">05</div>
            <div className="about-num">05<em>+</em></div>
          </div>
          <div className="about-exp-info">
            <p className="about-exp-lbl">Months Of<br />Experience</p>
            <span className="about-exp-badge">Frontend Dev</span>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="about-right">
          <h1 className="about-title">
            Get To<br />Know <em>Me.</em>
          </h1>

          <p className="about-desc">
            I specialize in front-end development and love working with HTML,
            CSS, JavaScript, and modern frameworks. I pay deep attention to
            UI/UX so every project not only works smoothly but feels great to use.
          </p>

          <div className="about-quote">
            <p>
              My goal is simple — to keep learning, improving, and creating
              meaningful web experiences. I'm always excited to collaborate,
              explore new technologies, and bring creative ideas to life.
            </p>
          </div>

          <div className="about-skills">
            {skills.map((s, i) => (
              <span className="skill-pill" key={i}>{s}</span>
            ))}
          </div>

          <div className="about-btns">
            <Button text="Know More" className="btn-primary" />
           <a href={CV} download={CV}> <Button text="Download CV" icon={FaDownload} className="btn-outline" /></a>
            <div className="about-avail">
              <span className="avail-dot" />
              <span><strong>Available</strong> for freelance</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About