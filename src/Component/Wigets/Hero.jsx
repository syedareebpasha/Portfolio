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
        <h1 className="heading-hero">BUILDING DIGITAL SOLUTIONS</h1>

        <div className="subtitle">
          <h5 className="subtitle-front">FRONT END DEVELOPER</h5>
          <h5 className="subtitle-react">
            <IconDiv icon={IoIosArrowBack} />
            REACT DEVELOPER
            <IconDiv icon={RxSlash} />
            <IconDiv icon={IoIosArrowForward} />
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
        <img className="my-img" src={img} alt="Areeb Pasha" />
      </div>

    </div>
  )
}

export default Hero