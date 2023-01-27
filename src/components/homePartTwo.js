import React from 'react'
//import headshot from '../img/test.png'
//import bg from '../img/cleanone.png'
import { Link } from 'react-router-dom'
import Contact from '../components/chontact'


function homePartTwo() {
  

  return (
    <>

    <div className='containTwo'>
      <div className='bgImg'></div>
        <div className='rowOne'>
        <p id="pOne"><b>Welcome to Turner's Cleaning Services</b></p>
            <p >Turner's Cleaning Services LLC
strives to provide quality professional Janitorial and General Cleaning Services to our Clients
With the Covid-19 Virus and the ongoing Variants ,we Sanitize
and disinfect all areas during our Cleaning Process to help
Prevent the spread of the virus
Turner's Cleaning Services LLC
provide the following:
<div style={{display:"flex",justifyContent:"center"}}>
<ul>
<li>Window Cleaning</li>
<li>Floor Mopping and other floor services</li>
<li>Carpet Cleaning</li>
<li>Emptying Trash Cans</li>
<li>General Office Cleaning</li>
</ul></div>
If your Company is looking for a
Quality Janitorial Cleaning Services at a reasonable price
tailor to your needs, please contact me at 601.874-6359
<br/>~Poncie Turner owner</p>
            <h2 id='typed'>We are confident that we can accommodate your needs. 
            We own and have access to the right equipment, supplies, and staff that can handle small 
            to large scale jobs.
            </h2>
            <Link to="/Services" className="btn btnh">
              View Services
            </Link>
        </div>
      <Contact />
    </div>
    </>
  )
}

export default homePartTwo