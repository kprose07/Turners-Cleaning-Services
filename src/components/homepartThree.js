import React from 'react'

import '../css/home.css'
import quoteop from '../img/quoteop.png'
import quotecl from '../img/quotecl.png'
import od from '../img/od.png'

function homepartThree() {
  return (
    <>
    <div id='carouselExample' className='carousel slide '>
  <div className='carousel-inner'>
    <div className='carousel-item active'>
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
                <div className='imgHolder'>
                  <img src={od} alt='Office Depot'/>
                </div>
                <div className='subtitle'>
                    <p id='bigt'>Home Depot</p>
                    <p id='smallt'>General Manager</p>
                </div>
                  <div className='infounder'>
                    <p>As the working world evolves, so does Office Depot.
                     We're thinking differently as a company and transforming
                      our business from a supplies-based retailer to a comprehensive
                       B2B platform provider and marketplace. In business, we all
                        need that go-to resource that understands what you need and
                         how to deliver it to you. At Office Depot, our workforce
                          strives to always have your back, anticipate your actions
                           and fundamentally make business success easier for YOU. </p>
                   </div>
            </div>
        </div>
    </div>
    
    </div>
    <div className='carousel-item'>
    <div className='containFour'>
        <p className='head'>What Customers Say About Turner's Cleaning Services</p>
        <div className='rBox'>
           <div className='reviewBox'>
                <img id='quoteOP' src={quoteop} alt='"'/>
                <p id='review'>I have known ****** Turner of Turner Cleaning Services for
                 almost 10 years. He has contracted his services to our company for the last
                  6 years. ****** has a good work ethic and has proven to be very trustworthy
                   and attentive to various tasks he is asked to perform. Often, we have 
                   asked for additional services for special events and he has almost always
                    accommodated us to meet our requests. I highly recommend Turner Cleaning 
                    Services for all your janitorial needs.</p>
                  <img id='quoteCL' src={quotecl} alt='"'/>
               </div>
            <div className='rinfo'>
                <div className='imgHolder'>
                  <img src={od} alt='Office Depot'/>
                </div>
                <div className='subtitle'>
                    <p id='bigt'>Dennis D</p>
                    <p id='smallt'>General Manager</p>
                </div>
                  <div className='infounder'>
                    <p>As the working world evolves, so does Office Depot.
                     We're thinking differently as a company and transforming
                      our business from a supplies-based retailer to a comprehensive
                       B2B platform provider and marketplace. In business, we all
                        need that go-to resource that understands what you need and
                         how to deliver it to you. At Office Depot, our workforce
                          strives to always have your back, anticipate your actions
                           and fundamentally make business success easier for YOU. </p>
                   </div>
            </div>
        </div>
    </div>
    
    </div>
    
  </div>
  <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    <span className='visually-hidden'>Previous</span>
  </button>
  <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
    <span className='carousel-control-next-icon' aria-hidden='true'></span>
    <span className='visually-hidden'>Next</span>
  </button>
</div>
    

    </>
  )
}

export default homepartThree