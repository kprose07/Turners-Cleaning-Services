import React from 'react'
import { useEffect } from "react";
import '../css/gallery.css'
//import '../components/g.js'

//Gallery Images
import imgOne from '../img/imgOne.jpg'
//Gallery Images
import imgTwo from '../img/imgTwo.jpg'
import imgThree from '../img/imgThree.jpg'
import imgFour from '../img/imgFour.jpg'
import imgFive from '../img/imgFive.jpg'
import imgSix from '../img/imgSix.jpg'
import imgSeven from '../img/imgSeven.jpg'
import imgEight from '../img/imgEight.jpg'
import imgNine from '../img/imgNine.gif'
import imgTen from '../img/imgTen.jpg'
import imgElev from '../img/imgElev.jpg'
import imgTw from '../img/imgTw.jpg'
import imgThr from '../img/imgThr.jpg'
import imgFo from '../img/imgFo.jpg'
import imgFif from '../img/imgFif.png'



function Gallery() {
  useEffect(() => {
const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlayImage.scrollIntoView();
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));

//overlay.addEventListener('click', close);
if (overlay) {
    // Not called
    overlay.addEventListener('click', () => {
       // overlay.classList.remove('open');
       close();
    });
  }
  })


  return (
   <div className='galcontain'>
    
  <section id="portfolio">
    <div className="project">
      <img className="project__image" src={imgOne} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgTwo} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgThree} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgFour} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgFive} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgSix} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgSeven} alt='imggal' />
      
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src={imgEight} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgNine} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgTen} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgElev} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgTw} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgThr} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgFo} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src={imgFif} alt='imggal' />
      <div className="grid__overlay">
        <button className="viewbutton">Zoom In</button>
      </div>
    </div>
    <div className="overlay">
      <div className="overlay__inner">
        <button className="close">close X</button>
        <img alt='imggal'/>
      </div>
    </div>
  </section>
   </div>
  )
}

export default Gallery