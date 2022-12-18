import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Wastedet from '../../components/wastedet/hosteldet';
import Sidebar4 from '../../components/sidebar/Sidebar4';
import "../home/home.css";





import video from "../../images/1.mp4";
import logo1 from "../../images/logo1.png";

export default function SignupPage() {
  const navigate = useNavigate();
    
  const [state, setState] = useState({
    name: "",
    email: "",
    age : 0,
    address: "",
    college: "",
    phno:0,
    location: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    const userData = {
        email : state.email,
        name : state.name,
        password : state.password,
        age: state.age,
        address: state.address,
        college: state.college,
        phno: state.phno,
        location: state.location,


      };
      axios
      .post(
          "https://august-startup-moderator-analyze.trycloudflare.com/api/signup-hostler/",
          userData
          )
          .then((res) => {
        
          
          console.log(res.data.token);


          navigate("/home");
          
          window.location.reload();
        

        // console.log(res.data);
        // console.log(userData);
        // handle success
      })
      .catch((err) => {
        console.log(err);
        

        // handle error
      });
  };
  

  return (
    
    <div className='home'>
          <Sidebar4 />
          <div className='editt'>
              <section class="h-fit w-full py-10  sm:py-10 lg:py-1">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-3xl">
        

        <div class="max-w-5xl mx-auto mt-12  sm:mt-16">
             

            <div class="mt-6 overflow-hidden bg-slate-100 rounded-xl">
                <div class="px-6 py-12 sm:p-12">
                    <h3 class="text-3xl font-semibold text-center text-gray-900">Edit Profile</h3>

                    <form action="#" method="POST" class="mt-14">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                <div class="mt-2.5 relative">
                                    <input type="name" name="name" value={state.name} onChange={handleChange} id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5 relative">
                                    <input type="email" name="email" id="" value={state.email}
                      onChange={handleChange}placeholder="Enter your Email" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Age </label>
                                <div class="mt-2.5 relative">
                                    <input type="age" name="age" id="" value={state.age}
                      onChange={handleChange} placeholder="Enter your age" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900">College</label>
                                <div class="mt-2.5 relative">
                                    <input type="college" name="college" id="" value={state.college}
                      onChange={handleChange} placeholder="Enter your college" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
<div>
                                <label for="" class="text-base font-medium text-gray-900">Phone Nmber</label>
                                <div class="mt-2.5 relative">
                                    <input type="phno" name="phno" value={state.phno}
                      onChange={handleChange} id="" placeholder="Enter your phone number" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>
<div>
                                <label for="" class="text-base font-medium text-gray-900">Location</label>
                                <div class="mt-2.5 relative">
                                    <input type="location" name="location" id="" value={state.location}
                      onChange={handleChange}placeholder="Enter your location" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            </div>

                           

                            <div class="sm:col-span-2">
                                <button type="submit" onClick={handleSubmit1} class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
          </div>
    

</div>

  )
}










