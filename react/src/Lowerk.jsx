import React from "react";
import image from './images/Image.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#3b463b] rounded-[40px] flex flex-col relative" style={{width:'92%',marginLeft:'3%'}}>
      {/* Top Left Title */}
      <div className="absolute top-8 left-8 text-white text-3xl font-sans font-semibold tracking-wide">
        LOWER KAITUNA
      </div>

      {/* Top Right Arrow Button */}
      <button className="absolute top-8 right-8 bg-black rounded-xl w-14 h-14 flex items-center justify-center">
        <span className="text-white text-3xl">&#8594;</span>
      </button>

      {/* Centered at bottom */}
      <div className="flex flex-col  w-full  ">
        <div className="mx-auto bg-white rounded-2xl shadow-lg w-[900px]  max-w-full" style={{marginTop:'150px'}}>
          {/* Navbar */}
          <div>
            <div className="flex justify-between items-center px-8 pt-6 pb-6" >
              <div className="text-black text-xl font-serif">lower kaituna</div>
              <nav className="flex gap-6 text-black text-sm font-sans">
                <a href="#">About</a>
                <a href="#">Ford Family History</a>
                <a href="#">Lower Kaituna River</a>
                <a href="#">News</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
              </nav>
            </div>
            {/* Image Grid with single background */}
            <div
              className="grid grid-cols-4 h-[650px] rounded-b-2xl "
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Card 1 */}
              {/* ...add your card overlays here... */}
            </div>
          </div>
        </div>

        {/* Bottom Center Title */}
        <div className="mx-auto  text-[#3b463b] text-4xl font-serif text-center w-full" >
          A beautiful slice of<br />New Zealand
        </div>
      </div>
    </div>
  );
}