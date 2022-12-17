import React from 'react';
import Fooddet from '../../components/fooddet/hosteldet';
import Sidebar1 from '../../components/sidebar/Sidebar1';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar1 />
    
      <Fooddet />
      
    </div>

  )
}
