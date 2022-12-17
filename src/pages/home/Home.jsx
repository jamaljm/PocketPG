import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";



export default function home() {
  return (
    <div className='home'>
      <Sidebar />
      <FeaturedInfo />
      
    </div>

  )
}
