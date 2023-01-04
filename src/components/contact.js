import React from 'react';
import {db} from '../firebase'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
    const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[phone,setPhone] = useState("");
  const[website,setWebsite] = useState("");
  const[message,setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('contacts').add({
      name: name,
      eamil: email,
      phone: phone,
      website: website,
      message: message
    })
    .then(()=>{
        alert('Thankyou! Your request has been submitted!');
    })
    .catch((error) => {
        alert(error.message);
    });
    setName("")
    setEmail("")
    setPhone("")
    setWebsite("")
    setMessage("");
  }
    return (
        <>
              <div className='rowTwo'>
        <div className="containerThree">  
  <form id="contact" action="" method="post" onSubmit={handleSubmit}>
    <h3>Contact Us Today!</h3>
    <h4>Contact us for custom quote/questions</h4>
    <fieldset>
      <input placeholder="Your name" vaule={name} onChange={(e) => setName(e.target.value)} type="text" tabIndex="1" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" vaule={email} onChange={(e) => setEmail(e.target.value)} type="email" tabIndex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number (optional)" vaule={phone} onChange={(e) => setPhone(e.target.value)} type="tel" tabIndex="3" />
    </fieldset>
    <fieldset>
      <input placeholder="Your Web Site (optional)" vaule={website} onChange={(e) => setWebsite(e.target.value)} type="url" tabIndex="4" />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." vaule={message} onChange={(e) => setMessage(e.target.value)} tabIndex="5" required></textarea>
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
