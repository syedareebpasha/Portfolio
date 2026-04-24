import React from "react";
import "./Banner_02.css";
import { MdOutlineStarRate } from "react-icons/md";
import IconDiv from "../Shared/IconDiv";
 
const banner2 = [
  { name:'UI/UX DESIGN' , icon:MdOutlineStarRate},
  {name:'E-COMMERCE WEBSITE' , icon:MdOutlineStarRate},
{ name:'PORTFOLIO WEBSITE' , icon:MdOutlineStarRate},
{ name: 'MODERN DESIGN' , icon:MdOutlineStarRate},
{ name: 'LANDING PAGE' , icon:MdOutlineStarRate},
{name: 'RESPONSIVE WEBSITE', icon:MdOutlineStarRate}
];
const Banner_02 = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-track">
      {[...banner2,...banner2].map((b, i) => (
      <div className="banner-item" key={i}>
        <span><IconDiv icon={b.icon} color={"white"} size={40}/></span>
      <span>{b.name}</span>
      </div>
      ) )}
      </div>
    </div>
  );
};

export default Banner_02;
