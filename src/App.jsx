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
// import Project02 from './Component/Wigets/Project02.jsx'
const App = () => {
  return (
    <div>
 <Navbar/>     
 <Hero/>
<Project/>
{/* <Project02/> */}
 <Banner/>
 <Skill/>
<Whatido/>
<Banner_02/>
<About/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App
