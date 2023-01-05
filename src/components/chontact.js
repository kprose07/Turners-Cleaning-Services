import React from 'react';
import emailjs from '@emailjs/browser';
//import {db} from '../firebase'

//import { useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  const sendEmail =(e) =>{
    e.preventDefault();

  emailjs.sendForm('service_q0wlpg8', 'template_qr1nko9',e.target, 'p_0QPDmSXIzC3IKQD')
  .then(
    (result) => {
    alert('Your request has been submitted!');

  }, (error) => {
    alert("Error");
  }
  );
  e.target.reset();
  

  };

    return (
        <>
              <div className='rowTwo'>
        <div className="containerThree">  
  <form id="contact" action="" method="post" onSubmit={sendEmail}>
    <h3>Contact Us Today!</h3>
    <h4>Contact us for custom quote/questions</h4>
    <fieldset>
      <input placeholder="Your name" name="name" type="text" tabIndex="1" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" name="email" type="email" tabIndex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" name="phone" type="tel" tabIndex="3" />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." name="message" tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
    <p className="copyright">© Turner's Cleaning LLC <Link to="/Contact" target="_blank" title="Contact">Contacts</Link></p>
  </form>
</div>
        </div>
    
        </>
    );
}

export default Contact;
