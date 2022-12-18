import "../featuredInfo/featuredInfo.css";
import { CalendarToday, LocationOn, MoreVert } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbSquareDot } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import hostelcard from "../hostelcard/hostelcard";
import Mallcard from "../hostelbox/mallcard";




export default function FeaturedInfo() {
 
  


  
  return (
      <div className="featured">
          
          <div className="featuredItem3 overflow-auto">
              <section class="bg-slate-300 2xl:py-0 2xl:bg-gray-50">
    <div class="px-4 mx-auto bg-slate-100 max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
        <div class="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div class="lg:order-2 2xl:-mr-24">
                    <img class="w-full shadow-xl rounded-xl" src="https://cdn.indesignlive.com/wp-content/uploads/03_StAndrewsGirlsHostelZEDLabccStudioNoughtsCrosses.jpg" alt="" />
                </div>

                <div class="lg:order-1">
                    <h2 class="text-base font leading-tight text-black sm:text-2xl lg:text-2xl lg:leading-snug">Yash House</h2>

                    <ul class="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Free WiFi </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Cleaning </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Maintenance</span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Study Room</span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Peaceful Area </span>
                        </li>

                        <li class="flex items-center">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-3 font-medium text-black"> Free Support </span>
                        </li>
                    </ul>

                    <div class="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                        <a href="#" title="" class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-slate-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button">
                            <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Pay Now
                        </a>

                        <a href="#" title="" class="inline-flex items-center justify-center px-8 py-3 mt-5 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md sm:mt-0 hover:bg-white hover:text-black" role="button"> Location </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

     </div>
    </div>
  );
}
