import React from 'react'
import bgimga from '../img/bg.png'
import '../css/about.css'
import AboutOne from '../components/aboutone'
function About() {
  return (
    <div className="bgimga">
    <img src={bgimga} alt="bg"/>
    <AboutOne />
</div>
  )
}

export default About