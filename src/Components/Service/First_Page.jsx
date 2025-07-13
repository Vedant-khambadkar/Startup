import React from "react";
// import landing from "../../assets/icons/landing pages.png";

const First_Page = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full max-w-[83vw] px-4 bg-red-400">
        <div className="Service_Banner w-full">
          <div className="z-20 w-full h-auto py-8 bg-black/80 flex items-center justify-center flex-col text-white gap-2 border border-[#262626]">
            <div className="text-3xl md:text-5xl tracking-tighter">Our Services</div>
            <div className="text-sm md:text-base tracking-normal text-center px-4 max-w-3xl">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </div>
          </div>
        </div>
      </div>

      {/* Service Section Wrapper */}
      {/* <div className="w-full max-w-[1280px] px-4 border border-[#262626] my-10">
       
        <div className="w-full py-6 border-b border-[#262626]">
          <div className="text-2xl md:text-4xl font-semibold tracking-tighter text-white">
            Website Design
          </div>
          <div className="text-sm md:text-base text-white/70 tracking-tight mt-2">
            We create visually stunning and user-centric website designs that
            capture your brand's essence. Our design philosophy focuses on
            clean layouts, intuitive navigation, and responsive visuals to
            ensure your users have an engaging experience across all devices.
          </div>
          <div className="text-xs md:text-sm text-white mt-4 bg-[#262626] inline-block px-3 py-1 rounded">
            Our website design services include:
          </div>
        </div>

        <div className="w-full py-4 text-white/50 text-lg border-b border-[#262626]">
          Project Planning and Scoping
        </div>

        <div className="flex flex-wrap gap-4 justify-between py-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-[48%] lg:w-[32%] border border-[#262626] p-4 text-white flex flex-col items-center text-center"
            >
              <img src={landing} alt="" className="w-16 h-16 mb-4" />
              <p className="text-sm">
                Create custom, responsive websites tailored to your brand.
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Final CTA Section */}
      {/* <div className="w-full max-w-[1280px] px-4 my-10">
        <div className="w-full bg-black/90 text-white border border-[#262626] py-10 px-6 text-center flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-semibold tracking-tight">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          <p className="text-xs md:text-sm text-white/70 mt-4 max-w-xl">
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations. Our multidisciplinary
            team works closely together to ensure seamless collaboration and a unified
            vision for your digital product.
          </p>
          <button className="bg-[#9EFF00] text-black text-sm md:text-base mt-6 px-6 py-2 rounded hover:opacity-90 transition-all">
            Start Project
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default First_Page;
