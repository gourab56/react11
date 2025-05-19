import React from "react";
import vector from "./images/vector.png"; // Import the vector image

export default function HeroSection() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="bg-[#8C42FF] max-w-9/10 ml-18 min-h-screen flex rounded-tr-[350px] pl-10 text-white relative overflow-hidden p-8 rounded-[60px]">
        
        <div className="absolute top-0 right-0 w-76 h-76  z-0">
<img
          src={vector}
          alt="Vector Shape"
          className="absolute top-0 right-0 w-76 h-76 z-0"
        />

        </div>

        <div className="relative z-10 max-w-5xl">
          <h1
            className="text-[80px] leading-tight font-bold"
            style={{
              fontFamily:
                "Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif",
            }}
          >
            Responsive
            <br />
            Web Design
            <br />
            for Small
            <br />
            Businesses
          </h1>
          <div className="flex w-7xl items-start mt-8 justify-between">
            <p className="text-black mt-8 text-lg font-bold max-w-xl">
              User friendly, results-driven websites, unlimited tech support
              and fixed ongoing prices you can budget for.
            </p>
            <button className="mt-8 bg-black text-white text-sm font-medium py-3 px-6 rounded-full hover:opacity-90">
              Get a free quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}