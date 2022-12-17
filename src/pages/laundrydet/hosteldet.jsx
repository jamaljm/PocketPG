import React from 'react';
import Laundrydet from '../../components/laundrydet/hosteldet';
import Sidebar2 from '../../components/sidebar/Sidebar2';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar2 />
    
      <Laundrydet />
      
    </div>

  )
}
