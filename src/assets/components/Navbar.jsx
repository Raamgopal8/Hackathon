import React from "react";

const Navbar = () => {
  // Smooth scroll handler
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-4 sm:px-6 flex items-center justify-between z-50 shadow-md h-15 md:h-20">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* Replace this with your actual logo image */}
        <a href="https://ksrce.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/KSRIET1.png"
            alt="Logo"
            className="h-15 w-15 md:h-20 md:w-20 object-contain"
          />
        </a>
        <a href="https://ksrce.ac.in/" target="_blank" rel="noopener noreferrer">
          <img
            src="/KSRCE2.png"
            alt="Logo"
            className="h-35 w-35 md:h-45 md:w-45 object-contain"
          />
        </a>
        {/* <span className="text-xl font-bold text-orange-500">DevSpark</span> */}
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => handleNavClick('home-section')} className="hover:text-orange-400 transition bg-transparent border-none outline-none cursor-pointer p-0 m-0">
          Home
        </button>
        <button onClick={() => handleNavClick('contact-section')} className="hover:text-orange-400 transition bg-transparent border-none outline-none cursor-pointer p-0 m-0">
          Contact
        </button>
      </div>

      {/* Register Button for desktop */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfRc6SZEt8dJol300_Nh45X4XtxA6EcqS97uW258pUKBe5R1w/formResponse"
        className="hidden sm:inline-block ml-4 bg-gradient-to-br from-purple-800 to-indigo-800 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition text-sm sm:text-base"
      >
        Grab Your Spot Now !!!
      </a>

      {/* Register Button for mobile */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfRc6SZEt8dJol300_Nh45X4XtxA6EcqS97uW258pUKBe5R1w/formResponse"
        className="inline-block sm:hidden ml-2 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-400 text-white font-bold py-1.5 px-3 rounded-md shadow-md hover:scale-105 transition text-xs"
        style={{ fontSize: '0.95rem' }}
      >
        Grab Your Spot Now !!!
      </a>
    </nav>
  );
};

export default Navbar;
