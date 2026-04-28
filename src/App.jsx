import React from 'react'
import Navbar from './Component/Layout/Navbar/Navbar.jsx'
import Hero from './Component/Wigets/Home/Hero.jsx'
import Skill from './Component/Wigets/Skills/Skill.jsx'
import Banner from '../src/Component/Wigets/Banner/Banner.jsx'
import About from '../src/Component/Wigets/About/About.jsx'
import Whatido from '../src/Component/Wigets/Service/Whatido.jsx'
import Project from '../src/Component/Wigets/Project/Project.jsx'
import Banner_02 from '../src/Component/Wigets/Banner/Banner_02.jsx'
import Contact from '../src/Component/Wigets/Contact/Contact.jsx'
import Footer from '../src/Component/Layout/Footer/Footer.jsx'
import Testimonials from './Component/Wigets/Reviews/Testimonial.jsx'
const App = () => {
  return (
    <div>
 <Navbar/>     
 <Hero/>
<Project/>
 <Banner/>
 <Skill/>
<Whatido/>
<Testimonials/>
<Banner_02/>
<About/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App
