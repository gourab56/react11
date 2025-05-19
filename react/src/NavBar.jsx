import React from "react";
import Logo from './images/logo.png'; // 
const NavBar = () => {
  return (
    <nav className="w-full h-[72px] px-12 py-6 flex items-center justify-between bg-black">
      {/* Logo */}
      <div className="flex items-center space-x-2 " style={{width:'160px',marginLeft:'30px'}}>
        <img src={Logo} alt="Logo"  />
       
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between items-center" style={{marginRight:'40px',width:'40%'}}>
        <a href="#services" className="text-white hover:text-gray-300">
          Services
        </a>
        <a href="#works" className="text-white hover:text-gray-300">
          Works
        </a>
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
         <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-full transition">
        Get a quote
      </button>
      </div>

     
    </nav>
  );
};

export default NavBar;
