import React from 'react';
import Table from './images/Table.png';
import Room from './images/Room.png';
import Toor from './images/Toor.png';
import Tour2 from './images/Tour2.png';

export default function WestlabHero() {
  return (
    <div className="flex flex-col md:flex-row p-4 min-h-screen bg-gray-100 gap-4" style={{ width: '92%', marginLeft: '3%' }}>
      {/* WESTLAB Section */}
      <section className="min-h-screen bg-[#0A2846] flex-1 rounded-3xl flex flex-col">
        <div className="flex justify-between items-center border-b px-6 py-4">
          <div className='text-white font-bold text-lg'>WESTLAB</div>
          <button className="bg-black text-white rounded-2xl w-10 h-10 flex items-center justify-center text-xl">→</button>
        </div>
        <div className='flex flex-col items-center justify-center flex-1 py-8'>
          <div className="bg-white rounded-3xl shadow-lg max-w-4xl w-full overflow-hidden p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold font-sans">
                <span className="text-sky-500">west</span>
                <span className="text-lime-500">lab</span>
              </h1>
              <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
                <a href="#">Projects</a>
                <a href="#">About</a>
                <a href="#">Solution</a>
                <a href="#">Resources</a>
                <a href="#">Contact</a>
                <a href="#" className="border px-2 py-1 rounded flex items-center">Instant project coding</a>
              </nav>
            </div>
            {/* Hero Section */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 mb-4">
                Laboratory Design<br />and Furnishing<br />Specialists
              </h2>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                <div className="space-y-3">
                  <button className="bg-[#0A2846] text-white px-5 py-2 text-sm font-semibold rounded-md">
                    CONTACT US
                  </button>
                  <button className="border border-[#0A2846] text-[#0A2846] px-5 py-2 text-sm font-semibold rounded-md">
                    PROJECT PORTFOLIO
                  </button>
                </div>
                <div>
                  <img src={Table} alt="table" className="rounded-md max-w-xs" />
                </div>
              </div>
              {/* Project Preview */}
              <div className='mb-8'>
                <div className="text-sm text-gray-600 font-medium mb-1">Project</div>
                <div className="font-bold text-[#0A2846] mb-1 text-sm">Gene Technology Access <br /> Centre</div>
                <a href="#" className="text-blue-600 text-sm underline">LEARN MORE</a>
                <div className="mt-2">
                  <img src="https://via.placeholder.com/200x150" alt="Project" className="rounded-md" />
                </div>
              </div>
              {/* Description */}
              <p className="font-bold text-black mb-8">
                Since 2011, Westlab Projects division has been supplying<br /> reliable laboratory furniture and joinery
                solutions. Our in-<br />depth industry knowledge allows us to create effective<br /> laboratory workflows that clients love.
              </p>
              {/* Feature Section */}
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <img src={Room} alt="Lab" className="rounded-md w-full md:w-1/2" />
                <div className="text-sm text-gray-700 font-medium md:w-1/2">
                  We have built a solid reputation across a wide range of sectors including Universities, School
                  science and STEM facilities, Quality Assurance, Research Facilities, Pathology, Life sciences
                  and Physical testing laboratories.
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center text-sm text-[#0A2846] font-semibold">
                <div>
                  <div className="text-2xl font-bold">309</div>
                  <div>Projects completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8hrs</div>
                  <div>Design Turnaround</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div>On-time Completion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BILL FAIRIES Section */}
      <section className="relative h-[1300px] bg-indigo-500 flex-1 rounded-3xl flex flex-col overflow-hidden">
        <div className="flex justify-between items-center border-b ">
          <div className='text-black font-bold text-lg'>BILL FAIRIES</div>
          <button className="bg-black text-white rounded-2xl w-10 h-10 flex items-center justify-center text-xl">→</button>
        </div>
        <div className='flex flex-col items-center justify-center flex-1 py-2'>
          <div className="bg-white rounded-3xl shadow-lg max-w-4xl w-full overflow-hidden p-8">
            <div>
              <h1 className="text-3xl font-bold font-sans mb-2">
                Bill Fairies
              </h1>
              <span className='block text-base text-gray-700 mb-4'>Gift Vouchers That Bills</span>
            </div>
            <nav className="flex flex-wrap gap-4 mb-6">
              <a href="#">Home</a>
              <a href="#">Solution</a>
              <a href="#">How it Works</a>
              <a href="#">About Us</a>
              <button className='text-indigo-900 border rounded-2xl bg-indigo-400 hover:bg-indigo-700 px-4 py-1'>Contact us</button>
            </nav>
            <div className='flex flex-col md:flex-row items-center gap-8 mb-8'>
              <div className='rounded-2xl border p-4'>
                <img src={Toor} alt='toor' className="max-w-xs" />
              </div>
              <div className='font-bold text-2xl text-center md:text-left'>
                <span className='text-black'>TRANSFORM BILLS INTO <br /></span>
                <span className='text-orange-600'>MEANINGFUL</span>
                <span className='text-black'> PRESENTS!</span>
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={Tour2} alt="" className="max-w-xs" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}