import React from 'react'
import './Project.css'
import img1 from '../../assets/project01.png'
import img2 from '../../assets/project02.png'
import img3 from '../../assets/project03.png'
import img4 from '../../assets/project04.png'
import img5 from '../../assets/project05.png'
import img6 from '../../assets/project06.png'
import Projectcard from '../Shared/Projectcard'

const projects = [
  {
    image: img1,
    title: "HelpHub AI",
    description: "An AI-powered support hub that answers queries intelligently using NLP and contextual understanding.",
    tag: "AI",
    githubUrl: "https://github.com/syedareebpasha/HACKATHON",
     liveUrl: "https://helphubaii.netlify.app/"  },
  {
    image: img2,
    title: "Feast",
    description: "A fully responsive, modern food delivery web application built with html, css and javascript with dynamic features.",
    tag: "Food Delivery Web",
     githubUrl: "https://github.com/syedareebpasha/Food-Delivery-App",
      liveUrl: "https://feastfooddelivery.netlify.app/"
  },
  {
    image: img3,
    title: "To-Do App",
    description: "To-Do Application built with html, css and javascript",
    tag: "To-Do",
     githubUrl: "https://github.com/syedareebpasha/ToDo-App",
     liveUrl: "https://javascripttodoappp.netlify.app/"
  },
  {
    image: img4,
    title: "Portfolio",
    description: "Responsive Portfolio Website with smooth animations, optimized performance and clean code architecture built with Reactjs and css",
    tag: "Portfolio",
    githubUrl: "https://github.com/syedareebpasha/Portfolio",
     liveUrl: "https://syedareebpasha.netlify.app/"
  },
  {
    image: img5,
    title: "UI/UX Design",
    description: "End-to-end product design with user research, wireframes, prototypes and high-fidelity Figma designs.",
    tag: "UI/UX",
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/yourusername/uiux-design"
  },
  {
    image: img6,
    title: "E-commerce Development",
    description: "Scalable multi-vendor marketplace with real-time inventory, analytics dashboard and payment gateway.",
    tag: "E-Commerce",
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/yourusername/marketplace"
  }
]

const Project = () => {
  return (
    <div id="Project">
      <h1 className="project-heading">My <span>Projects</span></h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <Projectcard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            tag={project.tag}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            />
        ))}
      </div>
    </div>
  )
}

export default Project