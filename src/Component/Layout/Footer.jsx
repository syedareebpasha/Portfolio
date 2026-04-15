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
      <img src={img} alt="Logo" />
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
      <a href="#"><IconDiv color="white" icon={FaFacebook} /></a>
      <a href="#"><IconDiv color="white" icon={IoLogoWhatsapp} /></a>
      <a href="#"><IconDiv color="white" icon={FaGithubSquare} /></a>
      <a href="#"><IconDiv color="white" icon={FaLinkedin} /></a>
    </div>
  </div>

  <hr className="footer-divider" />
  <p className="footer-copy">© 2026 Syed Areeb Pasha. All rights reserved.</p>
</footer>

    )
}

export default Footer
