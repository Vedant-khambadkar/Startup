import React from 'react';
import Abstract from "../../../assets/banner/Abstract Design.png"
const HeroSection = () => {
  return (
    <section className="relative w-full  min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden border border-[#333] mt-25">
      <div className="max-w-xl w-full text-center relative z-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
        Your Vision, Our Code
        </h1>

        {/* Subtext box */}
        <div className="mt-6 text-gray-400 px-4 py-4 rounded-xl text-sm sm:text-base border border-[#2a2a2a]">
          For startups.
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-black border border-gray-700 text-white px-5 py-2.5 rounded-md hover:bg-[#1e1e1e] transition">
            Our Works
          </button>
          <button className="bg-lime-400 text-black px-5 py-2.5 rounded-md font-semibold hover:bg-lime-500 transition z-5">
            Contact Us
          </button>
        </div>
      </div>

      {/* Background mesh or wave */}
      <div className="absolute inset-x-0 bottom-0 z-0">
        {/* You can insert an SVG or animated mesh below */}
       <img src={Abstract} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
