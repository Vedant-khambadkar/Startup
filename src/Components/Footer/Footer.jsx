import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Logo from "../../assets/icons/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white font-barlow border-[#333] border mt-24">
      {/* Top Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-10 px-6 lg:px-20 border-b border-[#1a1a1a] space-y-6 lg:space-y-0">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
            <img src={Logo} alt="" srcset="" className="h-12 w-12" />
          <span className="text-xl font-semibold">Agency</span>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-white">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Process</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        {/* Right: Social */}
        <div className="flex items-center space-x-3 bg-[#111] rounded-lg px-4 py-2">
          <span className="text-sm text-white">Stay Connected</span>
          <Facebook className="w-4 h-4 text-[#9EFF00] cursor-pointer" />
          <Twitter className="w-4 h-4 text-[#9EFF00] cursor-pointer" />
          <Linkedin className="w-4 h-4 text-[#9EFF00] cursor-pointer" />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-8 px-6 lg:px-20 text-gray-400 text-sm space-y-6 lg:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-10">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#9EFF00]" />
            <span>hello@squareup.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#9EFF00]" />
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#9EFF00]" />
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2023 SquareUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
