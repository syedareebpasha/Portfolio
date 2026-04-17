import React from 'react'
import './Navbar.css'
import Button from '../Shared/Button'
import Alogo from '../../assets/Alogo.png'
const Navbar = () => {
  return (
     <nav class="navbar">
    <div className='logo-text'>    
      <img class="logo" style={{backgroundColor:'#007bff'}} src={Alogo} alt=""/>
   <span> REEB</span>
</div>

    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle" class="menu-icon">&#9776;</label>

    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#Skill">Skill</a></li>
      <li><a href="#Project">Project</a></li>
      <li><a href="#About">About</a></li>
      <li><a href="#Contact">Contact</a></li>
      <li><Button text="Hire Me" className="btn" /></li>
    </ul>
  </nav>
  )
}


export default Navbar
