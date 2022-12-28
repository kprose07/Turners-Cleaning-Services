import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import SlideOne from '../img/so.png';
import SlideTwo from '../img/slide.gif';
import SlideThree from '../img/csthree.png';

export default function Slide() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'600px'}}
        itemId={1}
        src={SlideOne}
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
    </MDBCarousel>
  );
}