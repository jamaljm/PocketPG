import React from 'react';
import Wastedet from '../../components/wastedet/hosteldet';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
    
      <Wastedet />
      
    </div>

  )
}
