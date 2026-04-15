import React from "react";
import "./Banner_02.css";
import { MdOutlineStarRate } from "react-icons/md";
import IconDiv from "../Shared/IconDiv";

const Banner_02 = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-scroll">
        <span>MY EXPERIENCE</span>
        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE</span>
        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>

        <span>MY EXPERIENCE</span>

        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE</span>

        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE</span>

        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE</span>

        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE</span>

        <span><IconDiv icon={MdOutlineStarRate} color={"black"} size={40}/></span>
        <span>MY EXPERIENCE </span>
      </div>
    </div>
  );
};

export default Banner_02;
