import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Hosteldet from '../../components/hosteldet/hosteldet';



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
    
      <Hosteldet />
      
    </div>

  )
}
