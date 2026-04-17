import React from 'react'
import './Footer.css'
import img from '../../assets/Alogo.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import IconDiv from '../../Component/Shared/IconDiv'
 import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
         <footer className="footer">
  <div className="footer-container">
    <div className="footer-img">
      <img className='footer-image' src={img} alt="Logo" />
      <span className="footer-logo-text">REEB</span>
    </div>
    <div className="footer-heading">
      <h1>LET'S WORK TOGETHER</h1>
    </div>
  </div>

  <hr className="footer-divider" />

  <div className="contact-info-container">
    <div className="contact-info">
      <h4>CONTACT ME</h4>
      <div className="contact-details">
        <h5>03239676627</h5>
        <h5 style={{letterSpacing:'1px'}}>syedareebpasha9999@gmail.com</h5>
      </div>
    </div>

    <div className="icon-container">
      <a href="#" target='_blank'><IconDiv color="#007bff" icon={FaFacebook} /></a>
      <a target='_blank' href="https://wa.me/923239676627?text=Hello%20Syed%2C%20I%20saw%20your%20portfolio!"><IconDiv color="green" icon={IoLogoWhatsapp} /></a>
      <a target='_blank' href="https://github.com/syedareebpasha"><IconDiv color="black" icon={FaGithubSquare} /></a>
      <a target='_blank' href="https://www.linkedin.com/in/syed-areeb-pasha-3028b1384/"><IconDiv color="#007bff" icon={FaLinkedin} /></a>
    </div>
  </div>

  <hr className="footer-divider" />
  <p className="footer-copy">© 2026 Syed Areeb Pasha. All rights reserved.</p>
</footer>

    )
}

export default Footer
