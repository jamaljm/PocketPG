import React from "react";
import "./topbar.css";
import { NotificationsNone, SettingsApplications } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  function Logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    navigate("/login");

    window.location.reload();
  }
  return (
    <header>
    <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <nav className="relative flex flex-end items-center justify-between h-16 lg:h-20">
                
                <div className="">
                    <div className="flex-shrink-0">
                        <a href="#" title="" className="flex">
                            <img className="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                        </a>
                    </div>
                </div>

    

                <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-black"> Sign up </a>

                    <a href="#" title="" className="text-base font-medium text-black"> Sign in </a>

                    <a href="#" title="" className="flex items-center justify-center w-10 h-10 text-white bg-black rounded-full">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
    </div>

    <nav className="py-4 bg-white lg:hidden">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="mt-6">
                <div className="flex flex-col space-y-2">
                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Features </a>

                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Pricing </a>
                </div>

                <hr className="my-4 border-gray-200" />

                <div className="flex flex-col space-y-2">
                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign up </a>

                    <a href="#" title="" className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"> Sign in </a>
                </div>
            </div>
        </div>
    </nav>
</header>

  );
}
