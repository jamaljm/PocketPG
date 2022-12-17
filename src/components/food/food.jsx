import "./food.css";
import { CalendarToday, LocationOn, MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Foodbox from "../foodbox/mallcard";
import Foodbox1 from "../foodbox/mallcard1";
import Foodbox2 from "../foodbox/mallcard2";
import Foodbox3 from "../foodbox/mallcard3";
import Foodbox4 from "../foodbox/mallcard4";





export default function FeaturedInfo() {
 
  


  
  return (
    <div className="featured">
        <div className="featuredItem3 overflow-auto">
        
     <Foodbox />
     <Foodbox1 />
     <Foodbox2 />
     <Foodbox3 />
     <Foodbox4 />

        </div>
      <div className="featuredItem1">
        <div className="mapbox">
          <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1-WJRtrxebwtiGIJr-cx-nrmpp3Qb_BY&ehbc=2E312F"
          width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="10"
        />
        </div>
        
        
        
      </div>


    

      {/* featured 2 */
      }
    
      

      {/* featured 3 */}

    </div>
  );
}
