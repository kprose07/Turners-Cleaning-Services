import React from 'react'
import '../css/equipment.css'
import imgo from '../img/eqb.png'
import imbg from '../img/eq.png'
import header from '../img/head.png'
import cr from '../img/cr.png'
//test
function Equipment() {
  return (
  <div className='econt'>
      <img id='eqq' src={header} alt='equipmentbg' />

  <div className='ro'>
    <div className='equipcontain'>
      <img id='eq' src={imgo} alt='equipment' />
      <p>Turner's Cleaning Service understands what it takes to do a professional job and has the equipment and
supplies that allow it to stand on their standard of superior quality. It will continually upgrade and expand
inventory as the business expands.
</p></div>
<div className='two'>
<p className='tet'>A list of current inventories is listed below:</p>
<div className='te'>
<ul>
      <li>❑Work Van (1)</li>
      <li> ❑ Auto Scrubber (2) </li>
      <li> ❑ Wet Vac (1)</li>
      <li> ❑ Rug Doctor (1)</li>
      <li>  ❑ Side-to-side buffers (2)</li>
      <li> ❑ High Speed Buffers (1)</li>
      <li> ❑ Pressure Washer (1)</li>
      <li>  ❑ Vacuum Cleaners (4)</li>
   <li>  ❑ Mop Buckets (4)</li>
      <li>  ❑ Squeegees (4) </li>
      <li>   ❑ Mops (5)</li>
      <li>  ❑ Brooms (4)</li>
      <li>  ❑ Dust Pans (3)</li>
      <li>   ❑ All Purpose Cleaning Sticks (4)</li>
      <li>  ❑ Long Handle Brush (2)</li>
      <li>   ❑ Other Miscellaneous Cleaning </li>
    </ul>
    </div>
    </div>
    </div>
    <div className='creds'>
    <div className='crbox'>
    <img src={cr} alt='cert'/>

    <p id='subte'>Credentials</p>
      <p>
      Turner's Cleaning Service has worked incredibly hard to
obtain the proper licenses, certifications, and necessary paper
 work to establish a strong foundation in the janitorial services
  industry. The company is diligently working 
  towards building a sustainable and profitable business.
   The company has listed its credentials for your reference.
      </p>
      <p id='subte'>Certifications:</p>
      <ul>
      <li> o Mississippi Development Authority Model Contractor Certificate</li>
      <li> o Better Business Bureau Accreditation</li>
      <li> o City of Jackson African American Business Enterprise Certificate</li>
      <li> o Mississippi Development Authority Certified Minority Business Enterprise</li>
      <li> o U.S. Department of Veterans Affairs (VA) Certified Veteran-Owned Small Business (VOSB)</li>
      </ul></div>
    </div>
    </div>
  )
}

export default Equipment