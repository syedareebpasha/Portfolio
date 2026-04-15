// IconDiv.jsx
import React from "react";

const IconDiv = ({ icon: Icon, text, size, color, className }) => {
  return (
    <div className={`flex items-center gap-2 p-3 bg-gray-100 rounded-md ${className || ""}`}>
      {Icon && <Icon size={size || 30} color={color || "blue"} />} 
      {text && <span>{text}</span>}
    </div>
  );
};

export default IconDiv;
