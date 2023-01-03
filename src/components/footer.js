
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../img/logo.png';
import '../css/foot.css';
export default function App() {
  return (
    <MDBFooter bgColor='light' id='foot' className='text-center text-lg-start text-muted'>
    <section id='social' className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div  className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="google" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin" />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="github" />
        </a>
      </div>
    </section>
    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" id='colOne' className='mx-auto mb-4'>
          <img src={logo}></img>
       
            <p>
            MILITARY STANDARD PROFESSIONAL CLEANING SERVICES
            </p>
          </MDBCol>

          <MDBCol id='foota' md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Services
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Equipment
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Location
              </a>
            </p>
          
          </MDBCol>

          <MDBCol id='foota' md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                About
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Gallery
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Contact
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Quotes
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              Jackson, MS 39217, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              tponcie@gmail.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" />601-540-5659
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © Turner's Cleaning LLC, 2022. All rights reserved
    </div>
  </MDBFooter>
  );
}