import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import SlideOne from '../img/csone.png';
import SlideTwo from '../img/cstwo.png';
import SlideThree from '../img/csthree.png';


export default function Slide() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'500px'}}
        itemId={1}
        src={SlideOne}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'500px'}}
        itemId={2}
        src={SlideTwo}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        style={{ minHeight: '260px',maxHeight:'500px'}}
        itemId={3}
        src={SlideThree}
        alt='...'
      />
    </MDBCarousel>
  );
}