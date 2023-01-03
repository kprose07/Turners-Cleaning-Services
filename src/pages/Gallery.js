import React from 'react'
import $ from "jquery";
import '../css/gallery.css'
//import '../components/g.js'

//Gallery Images
import imgOne from '../img/tur.png'

function Gallery() {
  
const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));

//overlay.addEventListener('click', close);
if (overlay) {
    // Not called
    overlay.addEventListener('click', () => {
        overlay.classList.remove('open');
    });
  }

  return (
   <div className='galcontain'>
    
  <section id="portfolio">
    <div className="project">
      <img className="project__image" src={imgOne} />
      <p>websites</p>
      <h3 className="grid__title"> front-end</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1521104955835-ba91c70d6443?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38cdeda7d073c4b6d47a5776f184cba9&auto=format&fit=crop&w=700&q=80" />
      <p>pure css</p>
      <h3 className="grid__title"> front-end</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" />
      <p>web apps</p>
      <h3 className="grid__title"> full-stack</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd4d735954f33290fbf984e4eb7abe32&auto=format&fit=crop&w=700&q=80" />
      <p>daily ui</p>
      <h3 className="grid__title"> ui/ux design</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c5008952226f48ed4bf5d3ea64ff545&auto=format&fit=crop&w=700&q=80" />
      <p>websites</p>
      <h3 className="grid__title"> front-end</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-0.3.5&s=a4b3dc4bee43da458f6aa5c05be6bfc4&auto=format&fit=crop&w=700&q=80" />
      <p>pure css</p>
      <h3 className="grid__title"> front-end</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1481762554390-ff5562748bdf?ixlib=rb-0.3.5&s=1b7f850b7f8f702e237b0f81c0ec0bf5&auto=format&fit=crop&w=700&q=80" />
      <p>web apps</p>
      <h3 className="grid__title"> full-stack</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    
    <div className="project">
      <img className="project__image" src="https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-0.3.5&s=e5bf2f64858b8abe2a386b0c6df594e4&auto=format&fit=crop&w=700&q=80" />
      <p>daily ui</p>
      <h3 className="grid__title"> ui/ux design</h3>
      <div className="grid__overlay">
        <button className="viewbutton">view more</button>
      </div>
    </div>
    <div className="overlay">
      <div className="overlay__inner">
        <button className="close">close X</button>
        <img />
      </div>
    </div>
  </section>
   </div>
  )
}

export default Gallery