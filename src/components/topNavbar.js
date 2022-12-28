import React from 'react'
import '../css/topNav.css'
import logo from '../img/logo.png'
import {LinkContainer} from 'react-router-bootstrap';
//import { Outlet, Link } from "react-router-dom";

//look into justify space around/

function topNavbar() {
  return (
    <div className="container" id='top'>
       <div className="logo">
       <LinkContainer to="/Home">
       <img src={logo} alt="logo" /> 
       </LinkContainer>
       </div>
       <div className="quoteAdd">
       <h3>MILITARY STANDARD PROFESSIONAL CLEANING SERVICES</h3>
       <button type="button" className="btn">GET A FREE QUOTE TODAY</button>
       </div>
       <div className="callAdd">
          <p>Call Today!</p>
          <h2>601-540-5659</h2>
       </div>
    </div>
    
  )
}

export default topNavbar