import React from 'react'

import '../css/home.css'
import quoteop from '../img/quoteop.png'
import quotecl from '../img/quotecl.png'

function homepartThree() {
  return (
    <>
    <div className='containFour'>
        <p className='head'>What Customers Say About Turner's Cleaning Services</p>
        <div className='rBox'>
           <div className='reviewBox'>
                <img id='quoteOP' src={quoteop} alt='"'/>
                <p id='review'>Great professional service! I selected this company
                 because it was a locally owned small business for my facility's 
                 cleaning needs. I've been impressed with the level of detail, knowledge 
                 and the willingness to get the job done by the owner and his employees
                 on site. There is a full array of services this company provides and
                  the owner is a pleasure to work with. I'm very happy with the choice
                   and looking forward to continued collaboration with this company.
                   General Manager Office Depot.</p>
                  <img id='quoteCL' src={quotecl} alt='"'/>
               </div>
            <div className='rinfo'>
                <div className='img'></div>
                  <div className='infounder'>
                    <p>Home ....</p>
                   </div>
            </div>
        </div>
        <div className='spaceTwo'></div>
    </div>
    
    

    </>
  )
}

export default homepartThree