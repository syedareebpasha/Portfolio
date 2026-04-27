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
    image: img6,
    title: "E-commerce Development",
    description: "E=Commerce Website landing page built with Reactjs & Tailwindcss fully responsive Website, increases user experience.",
    tag: "E-Commerce",
    liveUrl: "https://luxecartshopping.netlify.app/",
    githubUrl: "https://github.com/syedareebpasha/E-commerce-website"
  },
  {
    image: img2,
    title: "Feast",
    description: "A fully responsive, modern food delivery web application built with html, css and javascript with dynamic features.",
    tag: "Food Delivery Web",
     githubUrl: "https://github.com/syedareebpasha/Food-Delivery-App",
      liveUrl: "https://feastfooddelivery.netlify.app/"
  },
  {
    image: img1,
    title: "HelpHub AI",
    description: "An AI-powered support hub that answers queries intelligently using NLP and contextual understanding.",
    tag: "AI",
    githubUrl: "https://github.com/syedareebpasha/HACKATHON",
     liveUrl: "https://helphubaii.netlify.app/"  
    },
  ,
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
    title: "Saylani SMIT Landing Page",
    description: "Landging page of Saylani SMIT website built with Reactjs and css",
    tag: "Landing Page",
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/yourusername/uiux-design"
  },
  {
    image: img3,
    title: "To-Do App",
    description: "To-Do Application built with html, css and javascript",
    tag: "To-Do",
     githubUrl: "https://github.com/syedareebpasha/ToDo-App",
     liveUrl: "https://javascripttodoappp.netlify.app/"
  }
 
]

const Project = () => {
  return (
    <div id="Project">
      <h1 className="project-heading">MY <span>PROJECTS</span></h1>
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