import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 space-y-4 sm:space-y-0">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
          📦 TrackMyPack
        </div>

        {/* Center: Rights */}
        <div className="text-center">
          © {new Date().getFullYear()} All rights reserved by Raghav.
        </div>

        {/* Right: Social Media */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook"><Facebook className="hover:text-blue-500" size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram className="hover:text-pink-500" size={18} /></a>
          <a href="#" aria-label="Twitter"><Twitter className="hover:text-blue-400" size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin className="hover:text-blue-600" size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
