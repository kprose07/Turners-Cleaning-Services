import React from 'react'
import tu from '../img/tur.png'

function aboutthree() {
  return (
        <div className='Codes'>
        <div className='col'>
            <img src={tu} alt='turner' />
        </div>
        <div className='colOnea'>
                <p id='heading'>Liceense/Bonding</p>
                <p id='content'><b>General Liability Insurance</b></p>
                <ul id='content'>
                    <li>Each occurrence - $1,000,000</li>
                    <li>Damages to rented premises
                        <br/>(each occurrence) - $100,000</li>
                    <li>Medical expenses - $5000
                    </li>
                    <li>General aggregate - $2,000,000</li>
                    <li>Products - $1,000,000</li>
                </ul>
                <p><b>Current Bond Amount: </b>$5000.00</p>
                <p id='heading'>NAICS Codes</p>
                <ul id='content'>
                    <li>561720</li>
                    <li>561790</li>
                    <li>561740</li>
                    <li>333318</li>
                    <li>335210</li>
                </ul>
            <p id='codeOne'>Cage Code: 835U2</p>
            <p id='codeTwo'>DUNS#: 081162295</p>
            </div>
        <div className='colTwoa'>
        
            <p id='heading'>KEY DIFFERENTIATORS</p>
                <ul id='content'>
                    <li>Customer First Approach</li>
                    <li>Quality Service</li>
                    <li>Fair Pricing</li>
                    <li>Pristine Results</li>
                    <li>Extensive Experience</li>
                </ul>

                    <p id='heading'>CORE COMPETENCIES</p>
                    <ul id='content'>
                        <li>General Cleaning & Sanitization Organizing</li>
                        <li>Furniture cleaning & Floor restoration</li>
                        <li>Floor waxing, stripping, & resurfacing</li>
                        <li>Carpet cleaning & Window Cleaning</li>
                        <li>Bathroom & kitchen area cleaning</li>
                        <li>Pressure Washing</li>
                    </ul>
            </div>
           
       


            </div>


  )
}

export default aboutthree