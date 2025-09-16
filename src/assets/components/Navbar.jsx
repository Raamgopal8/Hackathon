import React, { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile dropdown visibility
  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  // Smooth scroll handler
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    closeAllDropdowns();
  };

  // Handle dropdown item click
  const handleDropdownItemClick = (e, id) => {
    e.preventDefault();
    handleNavClick(id);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-4 sm:px-6 flex items-center justify-between z-50 shadow-md h-15 md:h-20">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
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
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => handleNavClick('home-section')} className="hover:text-orange-400 transition bg-transparent border-none outline-none cursor-pointer p-0 m-0">
          Home
        </button>
        <button onClick={() => handleNavClick('about-section')} className="hover:text-orange-400 transition bg-transparent border-none outline-none cursor-pointer p-0 m-0">
          About
        </button>
        <button onClick={() => handleNavClick('contact-section')} className="hover:text-orange-400 transition bg-transparent border-none outline-none cursor-pointer p-0 m-0">
          Contact
        </button>
      </div>

      {/* Desktop Register Button with Dropdown
      <div className="hidden sm:inline-block ml-4 relative">
        <button
          onClick={toggleDropdown}
          className="bg-gradient-to-br from-purple-800 to-indigo-800 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 transition text-sm sm:text-base flex items-center"
        >
          Grab Your Spot Now !!!
          <svg 
            className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Desktop Dropdown Menu */}
        {/* {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-1 z-50">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSemLPmyVuwspL8kLl5j7jT6OTSr1ckkRjRI7PfGVD11hTaCuA/viewform"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={(e) => handleDropdownItemClick(e, 'workshop-section')}
            >
              Workshop
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRc6SZEt8dJol300_Nh45X4XtxA6EcqS97uW258pUKBe5R1w/formResponse"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={(e) => handleDropdownItemClick(e, 'technical-events-section')}
            >
              Other Technical Events
            </a>
          </div>
        )}
      </div> */}

      {/* Mobile Register Button with Dropdown */}
      {/* <div className="inline-block sm:hidden ml-2 relative">
        <button
          onClick={toggleMobileDropdown}
          className="bg-gradient-to-r from-blue-500 via-violet-500 to-blue-400 text-white font-bold py-1.5 px-3 rounded-md shadow-md hover:scale-105 transition text-xs flex items-center"
          style={{ fontSize: '0.95rem' }}
        >
          Grab Your Spot Now !!!
          <svg 
            className={`ml-2 w-3 h-3 transition-transform ${isMobileDropdownOpen ? 'transform rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button> */}
        
        {/* Mobile Dropdown Menu */}
        {/* {isMobileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg py-1 z-50">
            <a 
              href="#workshop-section"
              className="block px-3 py-2 text-xs hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('workshop-section');
              }}
            >
              Workshop
            </a>
            <a 
              href="#technical-events-section"
              className="block px-3 py-2 text-xs hover:bg-gray-100"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('technical-events-section');
              }}
            >
              Technical Events
            </a>
          </div>
        )}
      </div> */}

      {/* Click outside to close dropdowns */}
      {/* {(isDropdownOpen || isMobileDropdownOpen) && (
        <div 
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
        />
      // )} */} 
    </nav>
  );
};

export default Navbar;
