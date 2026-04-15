import React from 'react'
import './Skill.css'
import IconDiv from '../Shared/IconDiv.jsx'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";


const Skill = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'100px' }}>
              <div><h1 style={{ fontSize:'50px',marginBottom:'70PX' }} id='Skill'>My Skills</h1></div>
      <div className="carousel">
        <div className='card-container' style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', gap:'20px'}}>
          <div className="card">
            <h1><IconDiv icon={IoLogoHtml5} size={90} /></h1>
            <h1>95%</h1>
            <h5>HTML</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaCss3Alt} size={90} /></h1>
            <h1>90%</h1>
            <h5>CSS</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={IoLogoJavascript} size={90} /></h1>
            <h1>70%</h1>
            <h5>JavaScript</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaBootstrap} size={90} /></h1>
            <h1>85%</h1>
            <h5>Bootstrap</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={RiTailwindCssFill} size={90} /></h1>
            <h1>80%</h1>
            <h5>Tailwind CSS</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaGitSquare} size={90} /></h1>
            <h1>75%</h1>
            <h5>Git</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaGithubSquare} size={90} /></h1>
            <h1>90%</h1>
            <h5>GitHub</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={VscVscodeInsiders} size={90} /></h1>
            <h1>85%</h1>
            <h5>VS Code</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={SiNetlify} size={90} /></h1>
            <h1>80%</h1>
            <h5>Netlify</h5>

          </div>
          <div className="card">
            <h1><IconDiv icon={IoLogoHtml5} size={90} /></h1>
            <h1>95%</h1>
            <h5>HTML</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaCss3Alt} size={90} /></h1>
            <h1>90%</h1>
            <h5>CSS</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={IoLogoJavascript} size={90} /></h1>
            <h1>70%</h1>
            <h5>JavaScript</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaBootstrap} size={90} /></h1>
            <h1>85%</h1>
            <h5>Bootstrap</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={RiTailwindCssFill} size={90} /></h1>
            <h1>80%</h1>
            <h5>Tailwind CSS</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaGitSquare} size={90} /></h1>
            <h1>75%</h1>
            <h5>Git</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={FaGithubSquare} size={90} /></h1>
            <h1>90%</h1>
            <h5>GitHub</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={VscVscodeInsiders} size={90} /></h1>
            <h1>85%</h1>
            <h5>VS Code</h5>
          </div>
          <div className="card">
            <h1><IconDiv icon={SiNetlify} size={90} /></h1>
            <h1>80%</h1>
            <h5>Netlify</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
