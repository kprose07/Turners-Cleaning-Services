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
            <p >
            Turner's Cleaning Service, LLC is delighted to present a general overview of its qualifications 
            and experience. We offer a full array of professional janitorial services and are experienced in
             servicing a diverse set of clientele. Reliable janitorial services are an important aspect of
              maintaining a professional image and we welcome the opportunity to discuss how we can meet your
               needs. If there are any questions or concerns, please feel free to contact Mr. Poncie Turner.
                Turner's Cleaning Services LLC strives to provide quality professional janitorial and general 
                cleaning services to our clients with the COVID-19 Virus and the ongoing Variants, we assure
                you that we provide sanitatation and disenfection services in all areas during our cleaning process which helps
                alleviate and prevent the spread of COVID. Turner's Cleaning Services LLC
provide the following:
<div style={{display:"flex",justifyContent:"center"}}>
<ul>
<li>Window Cleaning</li>
<li>Floor Mopping and other floor services</li>
<li>Carpet Cleaning</li>
<li>Emptying Trash Cans</li>
<li>General Office Cleaning</li>
</ul></div> Turner's Cleaning Service was formed in the
               State of Mississippi in August 2017 by Mr. Poncie Turner, who has over 30 years' 
               experience in janitorial services that began when he was enlisted in the United States Navy. 
               It is here that he learned the "military standard" of cleanliness that has propelled him 
               into a long-standing career and now business ownership in the janitorial services industry.
              If your company is looking for a
              quality janitorial cleaning services at a reasonable price
              tailored to your needs, please contact us!</p>
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
