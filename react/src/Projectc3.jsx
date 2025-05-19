



  import React from 'react';
import frame23 from './images/Frame23.png';
import Project from './images/Projectc4.png';
import Project3 from './images/Project3.png';
import Vehicle1 from './images/Vehicle1.png';
import Vehicle2 from './images/Vehicle2.png';
import Vehicle3 from './images/Vehicle3.png';
import Vehicle4 from './images/Vehicle4.png';

export default function Projectc3() {
  const vehicles = [
    {
      name: 'Yonder G-Shock',
      beds: 3,
      Image: Vehicle1,
      price: 100,
    },
    {
      name: 'Yonder Wanderer',
      beds: 1,
      Image: Vehicle2,
      price: 180,
    },
    {
      name: 'Yonder Dune',
      beds: 0,
      Image: Vehicle3,
      price: 200,
    },
    {
      name: 'Yonder Element',
      beds: 2,
      Image: Vehicle4,
      price: 350,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 min-h-screen bg-gray-100 gap-4" style={{ width: '92%', marginLeft: '3%' }}>
      {/* Left Section - Yonder Vehicles (50%) */}
      <section
        className="w-full md:w-1/2 bg-cover bg-no-repeat bg-center rounded-2xl flex flex-col"
        style={{ backgroundImage: `url(${Project3})` }}
      >
         <div className="flex  justify-between items-center w-full mb-4 p-4">
            <div className="font-bold text-3xl text-white">YONDER CARAVANS</div>
            <button className="bg-black rounded-xl w-14 h-14 flex items-center justify-center">
              <span className="text-white text-3xl">→</span>
            </button>
          </div>
        <div className="bg-white bg-opacity-95  rounded-2xl shadow-md  md:p-8 m-4 flex-grow">
          {/* Top Bar */}

          {/* Explore Vehicles */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold font-sans">Explore Vehicles</h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded bg-black text-white text-lg font-bold flex items-center justify-center">◀</button>
                <button className="w-8 h-8 rounded bg-black text-white text-lg font-bold flex items-center justify-center">▶</button>
              </div>
              <button className="ml-2 px-2 py-1 border border-orange-500 text-orange-500 rounded font-sans font-semibold text-sm hover:bg-orange-50">
                View All Vehicles
              </button>
            </div>
          </div>

          {/* Vehicle Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
                <img src={v.Image} alt={v.name} className="w-full h-40 object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="font-bold font-sans text-base mb-1">{v.name}</div>
                  <div className="flex items-center text-xs text-gray-500 gap-2 mb-1">
                    <span>🚐 Caravan</span>
                    <span>•</span>
                    <span>📍 Sydney Airport</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 gap-2 mb-2">
                    <span>🛏️ {v.beds}</span>
                  </div>
                  <div className="mt-auto">
                    <span className="text-xs text-gray-400">From</span>
                    <span className="ml-1 text-lg font-bold font-sans">${v.price}</span>
                    <span className="text-xs text-gray-400">AUD/day</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Section - Teams and Partners (50%) */}
      <section
        className="w-full md:w-1/2 bg-cover bg-no-repeat bg-center rounded-2xl flex flex-col"
        style={{ backgroundImage: `url(${Project})` }}
      >
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-md p-6 md:p-8 m-4 flex-grow mt-20">
          <h1 className="text-black mb-4">Home → Teams and Partners</h1>
          <div className="bg-white rounded-2xl shadow-inner w-full flex flex-col md:flex-row p-6 md:p-8">
            {/* Sidebar */}
            <aside className="w-full md:w-1/3 pr-6 border-r border-gray-200">
              <h2 className="text-2xl font-serif font-semibold mb-6">Teams and Partners</h2>
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>Committee</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <span className="w-2 h-2 border border-gray-400 rounded-full"></span>
                  <span>Partners</span>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10">
              <p className="text-lg font-sans mb-4">
                    Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit. Quisque porttitor leo at viverra
                   lobortis. Mauris a bibendum nunc. Aenean dolor 
                   nunc, tincidunt at magna quis, vehicula  eleifend
                    tortor. Sed posuere purus eget le.
              </p>
              <p className="text-sm text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                 porttitor leo at viverralobortis. Mauris a bibendum nunc. Aenean 
                 dolor nunc, tincidunt at magna quis, vehicula eleifend tortor. Sed 
                 posuere purus eget leo suscipit dapibus. In feugiat mauris vitae est     
                pulvinar, eu pharetra sapien tincidunt. Suspendisse nec lorem
                 commodo neque euismod   malesuada.
         
              </p>
              <button className="bg-emerald-500 hover:bg-emerald-800 text-white px-5 py-2 rounded-md font-sans text-sm font-semibold">
                Find out more
              </button>

              <div className="mt-8">
                <img src={frame23} alt="Team" className="rounded-md w-full" />
                <p className="text-xs text-gray-500 mt-2">Image: Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

