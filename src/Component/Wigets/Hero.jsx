import React from 'react'
import './Hero.css'
import Button from '../Shared/Button'
import img from '../../assets/image.png'
import IconDiv from '../Shared/IconDiv'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { RxSlash } from "react-icons/rx"
import Alogo from '../../assets/Alogo.png'


const Hero = () => {
  return (
    <div className="hero-container">

      <div className="hero-left">
        <h1 className="heading-hero" style={{fontSize:'80px', marginTop:'60px', fontWeight:'bolder'}}>BUILDING <br /> <span style={{color:'#007bff', fontSize:'80px', textShadow:'0 0 10px rgba(0, 198, 255, 0.4)'}}>DIGITAL</span> <br />SOLUTIONS</h1>

        <div className="subtitle">
          <h5 className="subtitle-front">FRONT END DEVELOPER</h5>
          <h5 className="subtitle-react">
           <div style={{display:'flex', alignItems:'center', gap:'-10px'}}>
            <IconDiv icon={IoIosArrowBack} color={"#06141b"} size={25} />
            </div>
            <span style={{transition:'all 0.3 ease-in-out'}}>
            REACT DEVELOPER
</span>
            <IconDiv icon={RxSlash} color={"#06141b"} size={25}/>

            <IconDiv icon={IoIosArrowForward} color={"#06141b"} size={25}/>

          </h5>
        </div>

        <div className="hero-btns">
          <Button text="Hire me"       className="btn-hero" />
          <Button text="View Projects" className="btn-hero" />
        </div>

        <p className="hero-desc">
          I'm a passionate Web Developer who loves building clean, modern, and
          beautiful user-friendly digital experiences. I focus on writing
          efficient code and turning ideas into functional, responsive websites.
        </p>
      </div>

      <div className="hero-right">
        <img className="my-pic duration-300 delay-75" src={img} alt="Areeb Pasha" />
      </div>

    </div>
  )
}

export default Hero