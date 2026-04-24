import React from 'react'
import './Whatido.css'

// SVG Icons (inline — no image imports needed)
const FrontendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="13" rx="2" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M8 21h8M12 17v4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8 10l2.5 2.5L15 8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WebsiteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="1.8" />
    <path
      d="M3 12h18M12 3c-2.5 3-4 5.7-4 9s1.5 6 4 9M12 3c2.5 3 4 5.7 4 9s-1.5 6-4 9"
      stroke="#2563eb"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const EcommerceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2h12l1 6H5L6 2z" stroke="#2563eb" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M5 8l1 12h12l1-12" stroke="#2563eb" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12h6M10 15.5h4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const services = [
  {
    icon: <FrontendIcon />,
    num: '01',
    heading: 'Front End Development',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  },
  {
    icon: <WebsiteIcon />,
    num: '02',
    heading: 'Website Development',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  },
  {
    icon: <EcommerceIcon />,
    num: '03',
    heading: 'E-commerce Development',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  },
  {
    icon: <EcommerceIcon />,
    num: '04',
    heading: 'Portfolio Website',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  },
  {
    icon: <EcommerceIcon />,
    num: '05',
    heading: 'UI/UX Design',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  },
  {
    icon: <EcommerceIcon />,
    num: '06',
    heading: 'Landing Page',
    desc: 'I offer a range of professional services designed to meet your business needs with precision and creativity.',
  }
]

const Whatido = () => {
  return (
    <section className="wi-section" id="Whatido">

      <div className="wi-head">
        <div className="wi-eyebrow">
          <span className="wi-eyebrow-line" />
          WHAT I DO
          <span className="wi-eyebrow-line" />
        </div>
        <h1 className="wi-title">
          BEST <span>SERVICE</span>
        </h1>
        <p className="wi-sub">Professional services designed to meet your business needs</p>
        <div className="wi-divider" />
      </div>

      <div className="wi-grid">
        {services.map((s, i) => (
          <div className="wi-card" key={i}>
            <span className="wi-card-num">{s.num}</span>
            <div className="wi-icon-box">{s.icon}</div>
            <h3 className="wi-card-title">{s.heading}</h3>
            <p className="wi-card-desc">{s.desc}</p>
            <span className="wi-card-arrow">
              View more <ArrowIcon />
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Whatido