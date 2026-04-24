import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import "./Banner.css";
import IconDiv from "../Shared/IconDiv";
const banner1 = [
{name: 'HTML', icon:MdOutlineStarRate},
{name:'CSS', icon:MdOutlineStarRate},
{name:'JAVASCRIPT', icon:MdOutlineStarRate},
{name:'REACT', icon:MdOutlineStarRate},
{name:'TAILWIND', icon:MdOutlineStarRate},
{name:'BOOTSTRAP', icon:MdOutlineStarRate},
{name:'GIT/GITHUB', icon:MdOutlineStarRate}

]


const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-track">
        {[...banner1,...banner1].map((b, i) => (
                  <div className="banner-item" key={i}>
<span style={{marginRight:'30px'}}>
<IconDiv icon={b.icon} color={'white'} />
</span>
<span>{b.name}</span>
      </div>
      ))}
      </div>
    </div>
  );
};

export default Banner;
