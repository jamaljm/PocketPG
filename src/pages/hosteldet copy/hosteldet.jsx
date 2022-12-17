import React from 'react';
import Hosteldet from '../../components/hosteldet/hosteldet';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
    
      <Hosteldet />
      
    </div>

  )
}
