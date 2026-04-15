import React from 'react'

const Projectcard = ({ image, title, description, icon: Icon, size = 20, color = "#413939" }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <div className="project-text">
        {Icon && <Icon size={size} color={color} />}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Projectcard
