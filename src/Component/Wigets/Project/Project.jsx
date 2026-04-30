import React from 'react'
import './Project.css'
import img1 from '../../../assets/project01.png'
import img2 from '../../../assets/project02.png'
import img3 from '../../../assets/project03.png'
import img4 from '../../../assets/project04.png'
import img5 from '../../../assets/project05.png'
import img6 from '../../../assets/project06.png'
import Projectcard2 from '../../Shared/Project2'

const projects = [
   {
    bgimage: img6,
    title: "LuxeCart",
    description: "E=Commerce Website landing page built with Reactjs & Tailwindcss fully responsive Website, increases user experience.",
    tag: "E-Commerce",
    liveUrl: "https://luxecart-wine.vercel.app/",
    githubUrl: "https://github.com/syedareebpasha/E-commerce-website",
         techStack:"[REACT JS, TAILWIND CSS]",
category:"E-commerce Development"  
        },
  {
    bgimage: img2,
    title: "Feast",
    description: "A fully responsive, modern food delivery web application built with html, css and javascript with dynamic features.",
    tag: "Food Delivery Web",
     githubUrl: "https://github.com/syedareebpasha/Food-Delivery-App",
      liveUrl: "https://feast-eight.vercel.app/",
           techStack:"[HTML, CSS, JAVASCRIPT]",
category:"Food Delivery website"  
  },
  {
    bgimage: img1,
    title: "HelpHub AI",
    description: "An AI-powered support hub that answers queries intelligently using NLP and contextual understanding.",
    tag: "AI",
    githubUrl: "https://github.com/syedareebpasha/HACKATHON",
     liveUrl: "https://helphub-ai-wheat.vercel.app/",
          techStack:"[HTML, CSS]",
category:"AI"  
          
    },
  ,
  {
    bgimage: img4,
    title: "Portfolio",
    description: "Responsive Portfolio Website with smooth animations, optimized performance and clean code architecture built with Reactjs and css",
    tag: "Portfolio",
    githubUrl: "https://github.com/syedareebpasha/Portfolio",
     liveUrl: "https://syedareebpasha.vercel.app/",    
      techStack:"[REACT JS, CSS]",
category:"Portfolio"  
        
  },
  {
    bgimage: img5,
    title: "Saylani SMIT Landing Page",
    description: "Landging page of Saylani SMIT website built with Reactjs and css",
    tag: "Landing Page",
    liveUrl: "https://your-live-url.com",
    githubUrl: "https://github.com/syedareebpasha/Saylani-Welfare",
     techStack:"[HTML, CSS]"  ,
category:"SMIT Landing Page"  
        
  },
  {
    bgimage: img3,
    title: "To-Do App",
    description: "To-Do Application built with html, css and javascript",
    tag: "To-Do",
     githubUrl: "https://github.com/syedareebpasha/ToDo-App",
     liveUrl: "https://to-do-app-iota-vert.vercel.app/",
     techStack:"[HTML, CSS, JAVASCRIPT]",
category:"To-Do App"  
        
  }
 
]

const Project = () => {
  return (
    <section className='panel panel2'>
    <div id="Project">
      <h1 className="project-heading">MY <span>PROJECTS</span></h1>
      <div className="project-list">
        {projects.map((project, index) => (
         <Projectcard2
  title={project.title}
  description={project.description}
  tag={project.tag}
  liveUrl={project.liveUrl}
  githubUrl={project.githubUrl}
  bgimage={project.bgimage}
  category={project.category}
  techStack={[ project.techStack ]}
/>
        ))}
      </div>
    </div>
</section>
  )
}

export default Project