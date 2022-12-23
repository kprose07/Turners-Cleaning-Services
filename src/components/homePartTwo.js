import React from 'react'
import headshot from '../img/test.png'
import bg from '../img/cleanone.png'
import { Link } from 'react-router-dom';


function homePartTwo() {
  return (
    <>
    
  <div className='space'></div>
    <div className='containTwo'>
      <div className='bgImg'></div>
        <div className='rowOne'>
        <p id="pOne"><b>Welcome to Turner's Cleaning Services</b></p>
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
            <h2 id='typed'>We are confident that we can accommodate your needs. 
            We own and have access to the right equipment, supplies, and staff that can handle small 
            to large scale jobs.
            </h2>
            <button type="button" className="btn btnh">GET A FREE QUOTE TODAY</button>
        </div>
        <div className='rowTwo'>
        <div class="containerThree">  
  <form id="contact" action="" method="post">
    <h3>Contact Us Today!</h3>
    <h4>Contact us for custom quote/questions</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p class="copyright">© Turner's Cleaning LLC <Link to="/About" target="_blank" title="Contact">Contacts</Link></p>
  </form>
</div>
        </div>
    
    </div>
    </>
  )
}

export default homePartTwo