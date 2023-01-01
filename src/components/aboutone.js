import React from 'react'
import bgimga from '../img/bg.png'
import '../css/about.css'
import $ from 'jquery'
//import '../components/robo.js'
import tu from '../img/turner.jpg'
import tut from '../img/turnerthree.jpg'
import pers from '../img/pers.gif'
import f from '../img/f.jpg'

function AboutOne() {
  return (
    <div className='contain'>

<section className="hero-section">
  <div className="card-grid">
    <div className="card">
      <div className="card__background" style={{
           backgroundImage: `url(${tu})`}}>
      </div>
      <div className="card__content">
      <h3 className="card__heading ho" >Owner</h3>
        <p className="card__category">Mr. Poncie Turner is the sole owner of Turner's Cleaning Service.</p>
       
      </div>
    </div>
    <div className="card">
      <div className="card__background" 
      style={{backgroundImage: `url(${tut})`}}></div>
      <div className="card__content">
        <h3 className="card__heading">Management</h3>
        <p className="card__category">Turner's Cleaning Service is currently managed by the owner, 
        Mr. Poncie Turner. He is responsible for hiring
and training, quality assurance, and fulfilling janitorial services.
As contracts increase the company will hire an experienced assistant manager who will also
 oversee cleaning,managing employees, and completing quality control checks routinely at each job site.
</p>
      </div>
    </div>
    <div className="card">
      <div className="card__background" style={{backgroundImage: `url(${pers})`}}></div>
      <div className="card__content">
      <h3 className="card__heading">Personnel</h3>
        <p className="card__category">
        Custodians/Maintenance Workers</p>
        <p className="card__category">Turner's Cleaning Service currently has experienced, on-call staff of 7-10 workers who are contracted at the
time work is available. As the company grows and business increases, TCS plans to hire these individuals fulltime 
and/or hire the number of individuals needed at the time contract is awarded. Additionally, TCS may seek
the services of an employment agency to ensure all staffing requirements are adequately accommodated.</p>
<p className="card__category">Administrative/Clerical</p>
<p className="card__category">The company currently contracts administrative and clerical responsibilities to Smart Solution Consulting, LLC.
The owner in conjunction with this organization ensures that all paperwork, documents, and other sensitive
data is properly handled and filed.
</p>
        
      </div>
      </div>
    <div className="card">
      <div className="card__background" style={{backgroundImage: `url(${f})`}}></div>
      <div className="card__content">
        <h3 className="card__heading">Financial Management</h3>
        <p className="card__category ">Turner's Cleaning Service currently contracts bookkeeping and payroll services through Smart Solution
Consulting, LLC. The company understands the importance of good financial management in being successful.
Smart Solution Consulting ensures that TCS is has up-to-date and accurate books as well as promptly paid
invoices and payroll.</p>

      </div>
    </div>
    </div>
</section>
    </div>
  )
}

export default AboutOne