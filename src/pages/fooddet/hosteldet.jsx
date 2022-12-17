import React from 'react';
import Fooddet from '../../components/fooddet/hosteldet';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
    
      <Fooddet />
      
    </div>

  )
}
