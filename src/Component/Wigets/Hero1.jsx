import React from 'react'
import './hero1.css'
import { IoLogoHtml5 }       from "react-icons/io5"
import { FaCss3Alt }         from "react-icons/fa"
import { IoLogoJavascript }  from "react-icons/io"
import { FaBootstrap }       from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa6";
import IconDiv from '../Shared/IconDiv'
const Hero1 = () => {
  return (
    <div className='hero-container'>
        {/* <div className='round-2'> */}
      <div className="round-container">
<IconDiv icon={IoLogoJavascript} color={'yellow'} size={60} className="hero-icon-js"/>
<IconDiv icon={FaReact} color={'#61dafb'} size={60} className="hero-icon-react"/>
<IconDiv icon={RiTailwindCssFill} color={'#38bdf8'} size={60} className="hero-icon-tailwind"/>


        <div className="round-sub">
        <div className='hero-heading'>BUILDING DIGITAL <br /><span> SOLUTIONS</span></div>
           <div className="hero-subtitle">
        <h5 className="subtitle-front">FRONT END DEVELOPER</h5>
        <h5 className="subtitle-react">REACT DEVELOPER</h5>
      </div>
<IconDiv icon={IoLogoHtml5} size={60} color={'#e34f26'} className="hero-icon-html"/>
<IconDiv icon={FaBootstrap} size={60} color={'#7952b3'} className="hero-icon-bootstrap"/>
        
        <div>
            <p className="hero-desc">
        I'm a passionate Web Developer who loves building clean, modern, and
        beautiful user-friendly digital experiences. I focus on writing
        efficient code and turning ideas into functional, responsive websites.
      </p>
        </div>
        
      <div className="hero-btns">
        <button className="btn-hero">Hire Me</button>
        <button className="btn-hero">View Projects</button>
      </div>
      </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Hero1
