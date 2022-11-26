import React from 'react'
import headshot from '../img/test.png'
import bg from '../img/cleanone.png'


function homePartTwo() {
  return (
    <>
  <div className='space'></div>
    <div className='containTwo'>
      <div className='bgImg'>
        <img src={bg} />
      </div>
        <div className='rowOne'>
        <img src={headshot} className='images' />
            <p>Turner's Cleaning Service, LLC is delighted to present a general overview of its qualifications 
            and experience. We offer a full compliment of professional janitorial services and are experienced in 
            servicing a diverse set of clientele. Reliable janitorial services are an important aspect of maintaining 
            a professional image and we welcome the opportunity to discuss how we can meet your needs.If there are any
             questions or concerns, they should be directed to Mr. Poncie Turner. Turner's Cleaning Service was formed in 
             the State of Mississippi in August 2017 by Mr. Poncie Turner, who has over 30 years' expertise in janitorial 
             services that began in U.S. Navy. It is here that he learned the "military standard" of cleanliness that has 
             propelled him into a long-standing career and now business ownership in the janitorial services industry. As 
             owner and manager, he is spearheading the company with a strong foundation of respect, consistency, and
             professionalism. We sincerely thank you for considering Turner's Cleaning Service, LLC and hope that we may provide 
             the highest level of janitorial services to your business.</p>
            <h2>We are confident that we can accommodate your needs. 
            We own and have access to the right equipment, supplies, and staff that can handle small 
            to large scale jobs.
            </h2>
            <button type="button" className="btn btnh">GET A FREE QUOTE TODAY</button>
        </div>
        <div className='rowTwo'>

        </div>
    
    </div>
    </>
  )
}

export default homePartTwo