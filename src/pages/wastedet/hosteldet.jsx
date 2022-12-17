import React from 'react';
import Wastedet from '../../components/wastedet/hosteldet';
import Sidebar3 from '../../components/sidebar/Sidebar4';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar3 />
    
      <Wastedet />
      
    </div>

  )
}
