import React from 'react';
import '../css/arslider.css'
import '../components/asliderscript.js'
//slider images
import card from '../img/turnertwo.jpg';
import cardtwo from '../img/ctwo.png';
import cardthree from '../img/cthree.png';
import cardfour from '../img/cfour.png';
import cardfive from '../img/cfive.png';
import cardsix from '../img/csix.png';


function Rslider() {
  return (
      
    <div className="sbg">
    <div className="slider">
        <span id="o"><img src={card} alt="card"/></span>
        <span className="two"><img src={cardtwo} alt="card"/></span>
        <span className="three"><img src={cardthree} alt="card"/></span>
        <span className="four"><img src={cardfour} alt="card"/></span>
        <span className="five"><img src={cardfive} alt="card"/></span>
        <span className="six"><img src={cardsix} alt="card"/></span>
    </div>

    </div>
  );
}

export default Rslider;