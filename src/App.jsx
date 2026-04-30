import React from 'react'
import Navbar from './Component/Layout/Navbar/Navbar.jsx'
import Hero from './Component/Wigets/Home/Hero.jsx'
import Skill from './Component/Wigets/Skills/Skill.jsx'
import About from '../src/Component/Wigets/About/About.jsx'
import Whatido from '../src/Component/Wigets/Service/Whatido.jsx'
import Project from '../src/Component/Wigets/Project/Project.jsx'
import Contact from '../src/Component/Wigets/Contact/Contact.jsx'
import Footer from '../src/Component/Layout/Footer/Footer.jsx'
import Testimonials from './Component/Wigets/Reviews/Testimonial.jsx'
import Loader from './Component/Wigets/Loader/Loader.jsx'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
<Toaster/>
 <Navbar/>     
 <Hero/>
<Project/>
 <Skill/>
<Whatido/>
<Testimonials/>
<About/>
<Contact/>
<Footer/>
<Loader/>
    </div>
  )
}

export default App
