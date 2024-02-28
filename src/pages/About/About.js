import React from 'react'
import '../About/About.scss'
import Libbie from "../../assets/images/misc/libbieBingo.JPG"

const About = () => {
  return (
    <div className='about body__block'>
      <div className='about__textBox'>

        <h1 className='about__header'>Libbie Farrell</h1> 
        <p className='about__text'>Libbie Farrell is an artist, maker and web developer interested in the intersection of art and tech. As a developer, she is familiar with JavaScript, CSS, HTML, React.js, Node.js, and MySQL. As an artist, she is interested in textiles, queer art and printmaking. This project acts as an oportunity to marry both analog and digital methods together in making a web based choose your own adventure game.  </p>
        
      </div>
      <img src={Libbie} className='about__img'/>
    
    </div>
  )
}

export default About
