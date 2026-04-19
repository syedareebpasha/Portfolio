import React from 'react'
import './Skill.css'
import IconDiv from '../Shared/IconDiv.jsx'
import { IoLogoHtml5 }       from "react-icons/io5"
import { FaCss3Alt }         from "react-icons/fa"
import { IoLogoJavascript }  from "react-icons/io"
import { FaBootstrap }       from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaGitSquare }       from "react-icons/fa"
import { FaGithubSquare }    from "react-icons/fa"
import { VscVscodeInsiders } from "react-icons/vsc"
import { SiNetlify }         from "react-icons/si"

const skills = [
  { icon: IoLogoHtml5,       pct: '95%', name: 'HTML5',       color: '#e34f26', className:'html' },
  { icon: FaCss3Alt,         pct: '90%', name: 'CSS3',        color: '#2965f1' , className:'css'},
  { icon: IoLogoJavascript,  pct: '70%', name: 'JavaScript',  color: '#f7df1e' ,className:'javascript'},
  { icon: FaBootstrap,       pct: '85%', name: 'Bootstrap',   color: '#7952b3', className:'bootstrap' },
  { icon: RiTailwindCssFill, pct: '80%', name: 'Tailwind',    color: '#38bdf8', className:'tailwind' },
  { icon: FaGitSquare,       pct: '75%', name: 'Git',         color: '#f05032', className:'git' },
  { icon: FaGithubSquare,    pct: '90%', name: 'GitHub',      color: '#24292e', className:'github' },
  { icon: VscVscodeInsiders, pct: '85%', name: 'VS Code',     color: '#007acc',className:'vs-code' },
  { icon: SiNetlify,         pct: '80%', name: 'Netlify',     color: '#324746', className:'netlify' },
]

const Skill = () => {
  return (
    <section className="skill-section" id="Skill">

      <div className="skill-heading">
        <span className="skill-chip">What I Know</span>
        <h2 className="skill-title">My <span className="skill-title-accent">Skills</span></h2>
        <p className="skill-sub">Technologies I work with every day</p>
        <div className="skill-divider" />
      </div>

      <div className="carousel">
        <div className="card-track">

          {[...skills, ...skills].map((s, i) => (
            <div className={s.className} key={i}>
              <div    
                className="card-icon-wrap"
                style={{ '--icon-color': s.color }}
              >
                <IconDiv icon={s.icon} size={44} color={s.color} />
              </div>
              <div className="card-pct">{s.pct}</div>
              <div className="card-bar-wrap">
                <div
                  className="card-bar"
                  style={{ '--bar-color': s.color, '--bar-width': s.pct }}
                />
              </div>
              <div className="card-name">{s.name}</div>
            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Skill