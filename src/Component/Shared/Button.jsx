import React from 'react'

const Button = ({ text, className, icon: Icon }) => {
  return (
    <button className={className}>
      {Icon && <Icon style={{ marginRight: "8px" }} />} 
      {text}
    </button>
  )
}

export default Button
