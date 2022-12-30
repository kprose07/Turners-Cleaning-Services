import React from 'react'
import bgimga from '../img/bg.png'
import '../css/about.css'
import AboutOne from '../components/aboutone'
import tTwo from '../img/turnertwo.jpg'

function About() {
  return (
    <>
    <div className='partOne'>
      <div className="bgimga">
           <img src={bgimga} alt="bg"/>
           </div>
           <div className='rowtwo'>
           <p id='subtitle'>Company Introduction</p>
      <p id='pone'>Turners Cleaning Service, LLC is a Veteran-Owned,
       commercial janitorial services business that was established in 
       August 2017. It serves the Jackson, MS Metropolitan with a wide 
       range of commercial cleaning services ranging from general cleaning
        and sanitizing to extensive floor waxing, stripping, and re-surfacing.
TCS has an on-call staff of 7-10 employees that are managed and overseen by 
the owner, Mr. Turner, who has several decades of military and commercial 
janitorial experience. The company prides itself on providing superior services. 
It has inventory of commercial equipment in addition to established relationships
 with janitorial supply companies to meet the demands of the clients.
</p>
<div className='ri'>

<img id='itwo'src={tTwo} alt="Mr.Turner"/>

</div>
           </div>
    </div>
   
    <AboutOne />
</>
  )
}

export default About