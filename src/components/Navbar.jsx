import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cover bg-center bg-gray-800 p-4 md:p-6" style={{backgroundImage: "url('../assets/fbg2.jpeg')"}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a href="#" className="text-white text-lg font-bold">Logo</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 18H20V20H4V18Z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Home</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">About</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Services</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2">Contact</a>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white hover:text-gray-300 block px-3 py-2">Home</a>
            <a href="#" className="text-white hover:text-gray-300 block px-3 py-2">About</a>
            <a href="#" className="text-white hover:text-gray-300 block px-3 py-2">Services</a>
            <a href="#" className="text-white hover:text-gray-300 block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
