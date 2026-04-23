import React from 'react'
import { FaGlobe, FaGithub } from 'react-icons/fa'
import './Projectcard.css'

const Projectcard = ({ image, title, description, tag, liveUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="img-wrap">
        <img src={image} alt={title} className="project-img" />
        <span className="tag">{tag}</span>
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-links">
          <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-live">
            <FaGlobe size={12} /> Live Demo
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-gh">
            <FaGithub size={12} /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projectcard