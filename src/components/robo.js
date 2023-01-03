/*
import React from 'react'
import bgimga from '../img/bg.png'
import '../css/about.css'
//import '../components/robo.js'
function aboutone() {
  return (
    <div className='aboutContain'>
    <div className="general-container">
  <input className="radio" type="radio" name="card" id="card-1" />
  <label className="content" htmlFor="card-1">
    <span className="icon">
      <i className="fas fa-sun"></i>
    </span>
    <h3 className="card-title">
      Owner
      <span className="subtitle">Mr. Poncie Turner is the sole owner of Turner's Cleaning Service.</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-2" />
  <label className="content" htmlFor="card-2">
    <span className="icon">
      <i className="fas fa-cloud-rain"></i>
    </span>
    <h3 className="card-title">
    Management
      <span className="subtitle">Turner's Cleaning Service is currently managed by the owner, Mr. Poncie Turner. He is responsible for hiring
and training, quality assurance, and fulfilling janitorial services.
As contracts increase the company will hire an experienced assistant manager who will also oversee cleaning,
managing employees, and completing quality control checks routinely at each job site.
</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-3" />
  <label className="content" htmlFor="card-3">
    <span className="icon">
      <i className="fas fa-cloud-moon"></i>
    </span>
    <h3 className="card-title">
    Personnel
      <span className="subtitle">Custodians/Maintenance Workers
Turner's Cleaning Service currently has experienced, on-call staff of 7-10 workers who are contracted at the
time work is available. As the company grows and business increases, TCS plans to hire these individuals fulltime
 and/or hire the number of individuals needed at the time contract is awarded. Additionally, TCS may seek
the services of an employment agency to ensure all staffing requirements are adequately accommodated.
Administrative/Clerical
The company currently contracts administrative and clerical responsibilities to Smart Solution Consulting, LLC.
The owner in conjunction with this organization ensures that all paperwork, documents, and other sensitive
data is properly handled and filed.</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-4" />
  <label className="content" htmlFor="card-4">
    <span className="icon">
      <i className="fas fa-snowflake"></i>
    </span>
    <h3 className="card-title">
    Financial Management

      <span className="subtitle">Turner's Cleaning Service currently contracts bookkeeping and payroll services through Smart Solution
Consulting, LLC. The company understands the importance of good financial management in being successful.
Smart Solution Consulting ensures that TCS is has up-to-date and accurate books as well as promptly paid
invoices and payroll.</span>
    </h3>
  </label>
  <input className="radio" type="radio" name="card" id="card-5" />
  <label className="content" htmlFor="card-5">
    <span className="icon">
      <i className="fas fa-poo-storm"></i>
    </span>
    <h3 className="card-title">
      Sioux Falls, United States
      <span className="subtitle">@eugenetriguba</span>
    </h3>
  </label>
</div>

    </div>
  )
}

export default aboutone





@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');

:root {
  --dark-blue: #1F4782;
  --dark-gray: #303335;
  --golden: #AB834C;
  --golden-tainoi: #E9BE71;
  --gray: #818C96;
  --white: #FFF;
}

*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.aboutContain {
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  justify-content: center;
  width: 100%;
   height: 450px;

}

.general-container {
    display: flex;
    margin:auto;
    width:70%;
    height:400px;
}

.radio {
  display: none;
}

.content{
  background: var(--white)
  url('../img/turner.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 3rem;
  cursor: pointer;
  flex: 1;
  margin-right: 0.8rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.content:hover {
  box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
}

.icon {
  align-items: center;
  background-color: var(--white);
  border-radius: 50%;
  bottom: 1rem;
  color: var(--golden-tainoi);
  display: flex;
  font-size: 1.5rem;
  height: 2.5rem;
  justify-content: center;
  left: 1.1rem;
  position: absolute;
  width: 2.5rem;
}

.content:nth-of-type(2) {
  background-image: url('https://images.unsplash.com/photo-1444384851176-6e23071c6127?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80');
}

.content:nth-of-type(3) {
  background-image: url('https://images.unsplash.com/photo-1482406611936-43ea538e39d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2110&q=80');
}

.content:nth-of-type(4) {
  background-image: url('https://images.unsplash.com/photo-1483663167873-0cfcc893b78c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2096&q=80');
}

.content:nth-of-type(5) {
  background-image: url('https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
  margin-right: 0;
}

.content:nth-of-type(2) .icon {
  color: var(--dark-gray);
}

.content:nth-of-type(3) .icon {
  color: var(--dark-blue);
}

.content:nth-of-type(4) .icon {
  color: var(--gray);
}

.content:nth-of-type(5) .icon {
  color: var(--golden);
}

.card-title {
  bottom: 4.2rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  left: 4.5rem;
  line-height: 1.1;
  opacity: 0;
  position: absolute;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.5);
  transform: translateX(2rem);
  transition: 290ms cubic-bezier(0.05, 0.61, 0.41, 0.95) 300ms;
  transition-property: opacity, transform;
  user-select: none;
  white-space: nowrap;

}

.subtitle {
  font-size: .9rem;
  overflow-wrap: normal;
}

/* Effect 
.radio:checked + .content {
  border-radius: 2rem;
  box-shadow: 0.3rem 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  flex: 10;
}

.radio:checked + .content > .card-title {
  opacity: 1;
  transform: translateX(0);
}*/



/*import React from 'react'
import bgimga from '../img/bg.png'
import '../css/about.css'
import AboutOne from '../components/aboutone'
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
           </div>
    </div>
   
    <AboutOne />
</>
  )
}

export default About








.partOne{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #f2f2f2;

}
.bgimga{
    text-align: left;
    min-height:100%;
    background-color: #f2f2f2;
    max-width: 100%;
}
.bgimga img{
    border-bottom: 5px solid #15223C;
    width:100%;
    min-height: 100%;
}
.rowtwo{
    max-width: 50%;
    margin: auto;
    padding: 5px;
}
#subtitle{
     font-family: 'Oswald';
    font-size: 30px;
    margin-bottom: 0px;
    margin: auto;
    text-align: center;
    color: #15223C;
}
#pone{
    width:100%;
    margin: auto;
    font-size: 20px;
    color: black;
    padding: 10px;
}

:root{
    --background-dark: #2d3548;
    --text-light: rgba(255,255,255,0.6);
    --text-lighter: rgba(255,255,255,0.9);
    --spacing-s: 8px;
    --spacing-m: 16px;
    --spacing-l: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;
    --width-container: 2000px;
  }
  
  .contain{
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
  
  .hero-section{
    align-items: flex-start;
    background-color: white;
    display: flex;

    min-height: 100%;
    justify-content: center;
    padding: var(--spacing-xxl) var(--spacing-l);
  }
  
  .card-grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: var(--spacing-l);
    grid-row-gap: var(--spacing-l);
    max-width: var(--width-container);
    width: 100%;
  }
  
  @media(min-width: 540px){
    .card-grid{
      grid-template-columns: repeat(2, 1fr); 
    }
  }
  
  @media(min-width: 960px){
    .card-grid{
      grid-template-columns: repeat(4, 1fr); 
    }
  }
  
  .card{
    list-style: none;
    position: relative;
  }
  
  .card:before{
    content: '';
    display: block;
    padding-bottom: 150%;
    width: 100%;
    border-radius: var(--spacing-l);
  }
  
  .card__background{
    background-size: cover;
    background-position: top;
    border-radius: var(--spacing-l);
    bottom: 0;
    filter: brightness(0.75) saturate(1.2) contrast(0.85);
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: center;
    transform: scale(1) translateZ(0);
    transition: 
      filter 200ms linear,
      transform 200ms linear;
  }
  
  .card:hover .card__background{
    transform: scale(1.05) translateZ(0);
  }
  
  .card-grid:hover > .card:not(:hover) .card__background{
    filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
  }

  .card p{
    display: none;
    font-size: 12px;
    color:white;
  }
  .card:hover p{
    display: block;
  }
  .card__content{
    left: 0;
    padding: var(--spacing-l);
    position: absolute;
    top: 0;
  }
  
  .card__category{
    color: var(--text-light);
    font-size: 0.9rem;
    margin-bottom: var(--spacing-s);
    text-transform: uppercase;
  }
  
  .card__heading{
    color: var(--text-lighter);
    font-size: 1.9rem;
    text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
    line-height: 1.4;
    word-spacing: 100vw;
  }







@media screen and (max-width:1404px) {
    .rowtwo{
        max-width: 40%;
        margin: auto;
        padding: 5px;
    }
}
@media screen and (max-width:1171px) {
    .rowtwo{
        max-width: 60%;
        margin: auto;
        padding: 5px;
    }
    .bgimga{
        max-width: 40%;
    }
}
@media screen and (max-width:939px) {
    .rowtwo{
        max-width: 90%;
        margin: auto;
        padding: 5px;
    }
    .bgimga{
        min-width: 100%;
      
    }
    #subtitle{
        font-size: 20px;
    }
    #pone{
        font-size: 13px;
    }
}*/