import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Laundrypage from '../../components/laundry/laundry';
import Sidebar from '../../components/sidebar/Sidebar';
import Sidebar2 from '../../components/sidebar/Sidebar2';




export default function LaundryPage() {
  return (
    <div className='home'>
      <Sidebar2 />
   
      <Laundrypage />
      
    </div>

  )
}
