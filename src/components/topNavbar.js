import React from 'react'
import {useNavigate} from 'react-router-dom';

import logo from '../img/logo.png'
import {LinkContainer} from 'react-router-bootstrap';
import '../css/topNav.css'
//import { Outlet, Link } from "react-router-dom";



const TopNavbar = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Quotes');
  };
  

  return (
    <div className="container" id='top'>
       <div className="logo">
       <LinkContainer to="/Home">
       <img src={logo} alt="logo" /> 
       </LinkContainer>
       </div>
       <div className="quoteAdd">
       <h3>MILITARY STANDARD PROFESSIONAL CLEANING SERVICES</h3>
       <button type="button" className="btn" onClick={navigateToContacts}>GET A FREE QUOTE TODAY</button>
       </div>
       <div className="callAdd">
          <p>Call Today!</p>
          <a style={{color: "inherit", textDecoration: "none", cursor: "inherit"}} href="tel:601-874-6359"><h2>601-874-6359</h2></a>
       </div>
    </div>
    
  )
}

export default TopNavbar




