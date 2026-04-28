import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-section " id="Contact">
      <div className="contact-card">

        <div className="contact-left">
          <span className="contact-badge">Get in touch</span>
          <h2 className="contact-heading">Let's Work<br />Together</h2>
          <p className="contact-sub">Have a project in mind? Fill out the form and I'll get back to you within 24 hours.</p>

          <div className="contact-info-item">
            <div className="info-icon">✉</div>
            <span>syedareebpasha9999@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <div className="info-icon">📞</div>
            <span>+92 3239676627</span>
          </div>
          <div className="contact-info-item">
            <div className="info-icon">📍</div>
            <span>Karachi, Pakistan</span>
          </div>

          <div className="contact-deco">
            <span className="deco-dot active"></span>
            <span className="deco-dot"></span>
            <span className="deco-dot"></span>
          </div>
        </div>

        <div className="contact-right">
          <p className="form-title">Send a message</p>
          <p className="form-sub">All fields are required</p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-field">
                <label>Your Name</label>
                <input type="text" placeholder="e.g. Ahmed Khan" required />
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input type="tel" placeholder="+92 300 000 0000" required />
              </div>
            </div>

            <div className="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell me about your project..." required></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact