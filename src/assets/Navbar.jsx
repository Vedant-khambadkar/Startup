import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/icons/Logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);
  const navLinks = ["Home", "Services", "Work", "Process", "About", "Careers"];

  return (
    <div className="w-full bg-[#1a1a1a] text-white font-medium">
      <div className="w-[90%] lg:w-[83%] mx-auto flex items-center justify-between h-[10vh]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-[40px] h-[40px]" />
          <h1 className="text-lg md:text-xl font-bold">Agency</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-7 items-center">
          {navLinks.map((link) => (
            <h1
              key={link}
              className="text-[1.5vw] md:text-[1vw] cursor-pointer hover:text-[#9EFF00] transition-all"
            >
              {link}
            </h1>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden sm:flex w-[7vw] min-w-[100px] h-[40px] bg-[#9EFF00] text-black rounded-sm items-center justify-center text-sm cursor-pointer hover:opacity-90 transition-all">
          Contact us
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {mobileOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 py-6 bg-zinc-900 text-white animate-slide-down">
          {navLinks.map((link) => (
            <h1
              key={link}
              className="text-base cursor-pointer hover:text-[#9EFF00] transition-all"
              onClick={toggleMenu}
            >
              {link}
            </h1>
          ))}
          <div className="w-[60%] bg-[#9EFF00] text-black rounded-sm text-center py-2 cursor-pointer hover:opacity-90 transition-all">
            Contact us
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
