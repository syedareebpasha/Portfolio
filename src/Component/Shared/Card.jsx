import React from 'react'

const Card = ({ image, heading, icon: Icon, desc, className }) => {
  return (
    <div className={className}>
      {image && <img src={image} alt={heading} className="card-img" />}
      <h3>
        {heading}
        {Icon && <Icon size={20} color="#333" />}
      </h3>
      <p>{desc}</p>
    </div>
  )
}

export default Card