
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../css/foot.css';


export default function App() {
  return (
    <>
    <MDBFooter bgColor='light' id='foot' className='text-center text-lg-start text-muted'>
    <section id='social' className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div  className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='https://www.facebook.com/turnerscleaningservicellc/' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a a='https://www.bbb.org/us/ms/jackson/profile/house-cleaning/turners-cleaning-service-llc-0523-235841263/customer-reviews' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='https://www.linkedin.com/company/turnerscleaningservice/' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
      </div>
    </section>
    <section className='footc'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>

        
          <MDBCol md="3" lg="4" xl="3" id='colOne' className='mx-auto mb-4'>
          <Link to="/Home">
          <img src={logo}></img>
          </Link>
          
            <p>
            MILITARY STANDARD PROFESSIONAL CLEANING SERVICES
            </p>
           

          </MDBCol>

          <MDBCol id='foota' md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>

            <Link id='footcol' to="/Services" className='text-reset'>
            
                Services
             
            </Link>

           
              <Link id='footcol' to='/Equipment' className='text-reset'> 
           
                Equipment
               
              </Link>
            
            
              <Link id='footcol' to='/Contact' className='text-reset'>
               Contact
              </Link>
           
          
          </MDBCol>

          <MDBCol id='foota' md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            
              <Link id='footcol' to='/About' className='text-reset'>
               About
              </Link>
            
           
              <Link id='footcol' to='/Gallery' className='text-reset'>
                 Gallery 
              </Link>
          
            
           
           
           
              <Link id='footcol' to='/Home' className='text-reset'>
                 Quotes
              </Link>
            
          </MDBCol>

          <MDBCol md="4" lg="3" xl="4" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              202 East Santa Clair ST, Jackson, MS 39217, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              tponcie@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" />
              <a style={{color: "inherit", textDecoration: "none",cursor: "inherit"}} href="tel:601-874-6359">601-874-6359</a>
            </p>
           
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>



    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © Turner's Cleaning LLC, 2022. All rights reserved
    </div>
    
  </MDBFooter>

  </>
  );
}