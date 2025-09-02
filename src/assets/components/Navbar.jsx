import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white px-6 flex items-center justify-between z-50 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* Replace this with your actual logo image */}
        <a href="https://ksrce.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/KSRIET1.png"
            alt="Logo"
            className="h-25 w-25 object-contain"
          />
        </a>
        <a href="https://ksrce.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/KSRCE.webp"
            alt="Logo"
            className="h-30 w-30 object-contain"
          />
        </a>
       
        {/* <span className="text-xl font-bold text-orange-500">DevSpark</span> */}
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="hover:text-orange-400 transition">
          Home
        </a>
        <a href="#contact" className="hover:text-orange-400 transition">
          Contact
        </a>
      </div>

      {/* Register Button */}
      <a
        href="#register"
        className="ml-6 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-400 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition"
      >
        Register Now
      </a>
    </nav>
  );
};

export default Navbar;
