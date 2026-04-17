import React from 'react'
import './Contact.css'
import img from '../../assets/Alogo.png'
const Contact = () => {
  return (
   <div className="contact-container" id='Contact'> 
  <div className="contact-right" >
    <img src={img} alt="Logo" />
  </div>

  <div className="contact-left">
    <h3 className="contact-title">CONTACT FORM</h3>
    <form className="contact-form">
      <input type="text" name="username" placeholder="Enter your name" required />
      <input type="number" name="number" placeholder="Enter your number" required />
      <input type="email" name="email" placeholder="Enter your email" required />
      <textarea name="message" placeholder="Enter your message" rows="5"></textarea>
      <button type="submit" className="contact-btn">Send Message</button>
    </form>
  </div>
</div>

  )
}

export default Contact
