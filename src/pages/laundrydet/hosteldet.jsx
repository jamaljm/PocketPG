import React from 'react';
import Laundrydet from '../../components/laundrydet/hosteldet';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
    
      <Laundrydet />
      
    </div>

  )
}
