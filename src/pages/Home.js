import React from 'react';

import '../css/home.css';
import Slider from '../components/homeSlider';
import HomeTwo from '../components/homePartTwo';


function Home() {
  return (
    <div>
      <Slider />
      <HomeTwo />
    </div>
  )
}

export default Home