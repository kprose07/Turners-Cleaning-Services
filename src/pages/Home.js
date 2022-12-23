import React from 'react';

import Slider from '../components/homeSlider';
import HomeTwo from '../components/homePartTwo';
import HomeThree from '../components/homepartThree';
import '../css/home.css';


function Home() {
  return (
    <div>
      <Slider />
      <HomeTwo />
      <HomeThree />
      
    </div>
  )
}

export default Home