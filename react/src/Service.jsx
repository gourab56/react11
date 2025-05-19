import React from "react";

 function Service() {
  return (
    <div className="bg-black text-white py-16 px-8">
      {/* Title Section */}
      <h1 className=" text-6xl font-light mb-12" style={{ fontFamily: "Arial, sans-serif",marginLeft:'50px'}}>
        Let us design or re-design<br/>  <span className="font-bold" > your “first impression”</span>
      </h1>

      {/* Services Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-14 max-w-7xl mx-10">
        {/* Web Design Card */}
        <div className="bg-green-500  p-6 flex flex-col justify-between  rounded-3xl">
          <div >
            <h2 className="text-xl font-bold mb-4">WEB DESIGN</h2>
            <p className="text-sm">
              We design fast, modern websites that keep visitors engaged and turn clicks into customers.
            </p>
          </div>
          <button className="mt-6 bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-90">
            <span className="text-3xl" style={{width:'40px'}}>→</span>
          </button>
        </div>

        {/* E-Commerce Card */}
        <div className="bg-blue-500 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">ECOMMERCE</h2>
            <p className="text-sm">
              We create seamless, user-friendly online stores that help you convert visitors into buyers.
            </p>
          </div>
          <button className="mt-6 bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-90">
            <span className="text-3xl" style={{width:'40px'}}>→</span>
          </button>
        </div>

        {/* Marketing Card */}
        <div className="bg-yellow-500 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">MARKETING</h2>
            <p className="text-sm">
              We plan and design digital campaigns across Google, Facebook, Instagram, YouTube, and more.
            </p>
          </div>
          <button className="mt-6 bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-90">
            <span className="text-3xl" style={{width:'40px'}}>→</span>
          </button>
        </div>

        {/* Graphic Design Card */}
        <div className="bg-purple-800 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">GRAPHIC DESIGN</h2>
            <p className="text-sm">
              From logos to print materials, we build strong, consistent visuals that bring your brand to life.
            </p>
          </div>
       <button className="mt-6 bg-black text-white w-14 h-14 rounded-2xl flex items-center justify-center hover:opacity-90">
            <span className="text-3xl" style={{width:'40px'}}>→</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}
export default Service;