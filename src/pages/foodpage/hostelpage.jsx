import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Hostelcard from '../../components/food/food';
import Sidebar from '../../components/sidebar/Sidebar';



export default function HostelPage() {
  return (
    <div className='home'>
      <Sidebar />
   
      <Hostelcard />
      
    </div>

  )
}
