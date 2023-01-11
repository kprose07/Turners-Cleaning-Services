import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import SlideOne from '../img/slo.png';
import SlideTwo from '../img/slt.png';
import SlideThree from '../img/slth.png';
import SlideFour from '../img/sls.png';
import SlideFive from '../img/csthree.png';


export default function Slide() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'600px'}}
        itemId={1}
        src={SlideFive}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'600px'}}
        itemId={2}
        src={SlideTwo}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'600px'}}
        itemId={3}
        src={SlideThree}
        alt='...'
      />
       <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'600px'}}
        itemId={4}
        src={SlideFour}
        alt='...'
      >

      </MDBCarouselItem>

    </MDBCarousel>
  );
}