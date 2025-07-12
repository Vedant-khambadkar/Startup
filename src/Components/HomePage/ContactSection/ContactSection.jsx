import React, { useState } from "react";
import bgImage from "../../../assets/banner/inquire.png"; // Make sure to import your image correctly
import Logo from "../../../assets/icons/Logo.png"
const ContactForm = () => {
  const [budget, setBudget] = useState(10000);

  return (
    <div className="min-h-screen bg-dark-bg font-barlow text-white border border-[#333] mt-24">
      {/* Top Section */}
      <div
        className="w-full bg-cover bg-center py-20 flex flex-col items-center text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-16 h-16 bg-neon rounded-xl flex items-center justify-center shadow-neon mb-6">
          <img src={Logo} alt="" srcset="" className="h-12 w-12" />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold">
          Thank you for your Interest in <span className="text-white">AGENCY.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mt-4 px-4">
          We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
        </p>
        <button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded font-semibold shadow hover:brightness-110 transition">
          Start Project
        </button>
      </div>

      {/* Form Section */}
      <form className="max-w-4xl mx-auto p-10 mt-10 bg-[#1a1a1a] rounded-lg border border-[#333] space-y-8 mb-9">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm mb-2 block">Full Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full bg-dark-bg border border-[#333] rounded px-4 py-3 outline-none focus:border-neon"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full bg-dark-bg border border-[#333] rounded px-4 py-3 outline-none focus:border-neon"
            />
          </div>
        </div>

        {/* Contact Reasons */}
        <div>
          <label className="block text-sm mb-3">Why are you contacting us?</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Web Design", "Website Development", "Landing Pages", "Others"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 bg-dark-bg border border-[#333] px-4 py-2 rounded hover:border-neon transition"
              >
                <input type="checkbox" className="accent-neon" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget Slider */}
        <div>
          <label className="block text-sm mb-2">Your Budget</label>
          <p className="text-gray-400 mb-4">Slide to indicate your budget range</p>
          <input
            type="range"
            min="5000"
            max="10000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full accent-neon"
          />
          <div className="flex justify-between text-sm mt-2 text-gray-400">
            <span>5,000/-</span>
            <span>{Number(budget).toLocaleString()}/-</span>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-2">Your Message</label>
          <textarea
            rows="4"
            placeholder="Type here"
            className="w-full bg-dark-bg border border-[#333] rounded px-4 py-3 outline-none focus:border-neon"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-lime-400 text-black px-10 py-3 font-semibold rounded shadow hover:brightness-110 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
