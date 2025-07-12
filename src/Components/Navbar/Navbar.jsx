import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Ensure you have lucide-react installed
import logo from "../../assets/icons/Logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["Home", "Services", "Work", "Process" , "About", "Careers"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1a1a] text-white px-6 py-4 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 p-1">
            <div className="">
           <img src={logo} alt="" className="w-9 h-9" />

            </div>
            <span className="font-bold text-2xl ">Agency</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link, i) => (
              <button
                key={i}
                className="hover:text-lime-400 px-3 py-1.5 rounded-md font-medium transition"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <button className="bg-lime-400 text-black font-medium px-4 py-2 rounded-md hover:bg-lime-500 transition">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 px-4 text-sm">
            {navLinks.map((link, i) => (
              <button
                key={i}
                className={`text-left ${
                  link === "Home" ? "bg-[#1e1e1e]" : ""
                } px-3 py-2 rounded-md hover:text-lime-400`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </button>
            ))}
            <button
              className="bg-lime-400 text-black font-medium px-4 py-2 rounded-md hover:bg-lime-500 transition w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Padding to prevent content from hiding behind navbar */}
   
    </>
  );
};

export default Navbar;
