import React from 'react'
import Navbar from './Component/Layout/Navbar.jsx'
import Hero from './Component/Wigets/Hero.jsx'
import Skill from './Component/Wigets/Skill.jsx'
// import Card from '../src/Component/Shared/Card.jsx'
import Banner from '../src/Component/Wigets/Banner.jsx'
import About from '../src/Component/Wigets/About.jsx'
import Whatido from '../src/Component/Wigets/Whatido.jsx'
import Project from '../src/Component/Wigets/Project.jsx'
import Banner_02 from '../src/Component/Wigets/Banner_02.jsx'
import Contact from '../src/Component/Wigets/Contact.jsx'
import Footer from '../src/Component/Layout/Footer.jsx'
const App = () => {
  return (
    <div>
 <Navbar/>     
 <Hero/>
 <Skill/>
 <Banner/>
<Whatido/>
<Project/>
<Banner_02/>
<About/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App
