import React from 'react';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Foodpage from '../../components/food/food';
import Sidebar from '../../components/sidebar/Sidebar';
import Sidebar1 from '../../components/sidebar/Sidebar1';




export default function FoodPage() {
  return (
    <div className='home'>
      <Sidebar1 />
   
      <Foodpage />
      
    </div>

  )
}
