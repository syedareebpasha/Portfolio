import React from 'react'
import "./Whatido.css"
import { TfiLineDouble } from "react-icons/tfi"
import IconDiv from '../Shared/IconDiv'
import Card from '../Shared/Card'
import Mobileapp  from "../../Assets/mobileapp.png"
import Website    from "../../Assets/website.png"
import Ecommerce  from "../../Assets/Ecommerce.png"
import { FaLocationArrow } from "react-icons/fa"

const services = [
  {
    image: Mobileapp,
    heading: "Front End Development",
    desc: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
  },
  {
    image: Website,
    heading: "Website Development",
    desc: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
  },
  {
    image: Ecommerce,
    heading: "E-commerce Development",
    desc: "I offer a range of professional services designed to meet your business needs with precision and creativity.",
  },
]

const Whatido = () => {
  return (
    <div className="whatido-container" id="Whatido">

      <div className="whatido-left">
        <h5 className="sub-whatido">
          <IconDiv color="white" icon={TfiLineDouble} size={25} />
          WHAT I DO
        </h5>
        <h1 className="heading-whatido">BEST <br /> SERVICE</h1>
      </div>

      <div className="services">
        {services.map((s, i) => (
          <Card
            key={i}
            image={s.image}
            heading={s.heading}
            icon={FaLocationArrow}
            desc={s.desc}
            className="service-card"
          />
        ))}
      </div>

    </div>
  )
}

export default Whatido