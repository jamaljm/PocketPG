import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Wastepage from '../../components/waste/waste';
import Sidebar from '../../components/sidebar/Sidebar';
import Sidebar3 from '../../components/sidebar/Sidebar3';




export default function FoodPage() {
  return (
    <div className='home'>
      <Sidebar3 />
   
      <Wastepage />
      
    </div>

  )
}
