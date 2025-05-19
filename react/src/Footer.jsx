import React from "react";
export default function Footer() {
    return(
          <footer className="bg-black text-white px-6 py-12" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Services Column */}
        <div>
          <h4 className="text-lg font-[satoshi] font-medium mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/90 font-[satoshi]">
            <li>Web Design</li>
            <li>Ecommerce</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        {/* Works Column */}
        <div>
          <h4 className="text-lg font-[satoshi] font-medium mb-4">Works</h4>
        </div>

        {/* About Column */}
        <div>
          <h4 className="text-lg font-[satoshi] font-medium mb-4">About</h4>
        </div>

        
        
      </div>

      {/* Logo and Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-violet-600 rounded-tr-[30px] flex items-center justify-center relative overflow-hidden ">
            {/* Inner white icon simulated with a shape */}
             <svg className="w-12 h-12 -rotate-120">
                <path
      d="M0,20 A20,20 12,0,1 40,20 L20,20 Z"
    fill=""/>
            </svg>
          </div>
          <h1 className="text-9xl w-[900px]  font-bold font-[clash]" >Creativefold</h1>
        </div>

        {/* Refer & Privacy */}
        <div className="flex-row space-x-6 text-sm font-[satoshi] text-white/80">
          <a href="#">Refer</a>
          <a href="#">Privacy</a>
        </div>
      </div>

      {/* Copyright */}
        <div className="text-sm text-white/80 py-6 px-25">
            © 2023 Creativefold. All rights reserved.
    </div>
    </footer>
    )
}