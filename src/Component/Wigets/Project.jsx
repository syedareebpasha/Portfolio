import React from 'react'
import './Project.css'
import { FaLocationArrow } from "react-icons/fa"

import img1 from '../../assets/project01.jpg'
import img2 from '../../assets/project02.jpg'
import img3 from '../../assets/project03.jpg'
import img4 from '../../assets/project04.jpg'
import img5 from '../../assets/project05.jpg'
import img6 from '../../assets/project06.jpg'

import Projectcard from '../Shared/Projectcard'
import { div } from 'motion/react-client'

const projects = [
  { image: img1, title: "UI/UX Design", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow },
  { image: img2, title: "Web Development", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow },
  { image: img3, title: "E-commerce Development", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow },
  { image: img4, title: "Web Development", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow },
  { image: img5, title: "UI/UX Design", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow },
  { image: img6, title: "E-commerce Development", description: "Lorem ipsum dolor sit amet...", icon: FaLocationArrow }
]

const Project = () => {
  return (
    <div id='Project'>
        <h1 className='project-heading'>MY <span style={{borderBottom:'5px solid #007bff'}}>PROJECTS</span></h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <Projectcard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          icon={project.icon}
        />
      ))}
    </div>
  </div>
  )
}

export default Project
