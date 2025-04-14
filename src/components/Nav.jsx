import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-blue-500">
      <div className=" mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo - Responsive sizing with proper alignment */}
        <div className="flex  items-center">
          <img src="/logo.jpg" alt="CloudCore Logo" className="h-14 md:h-12" />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 px-3 py-2 rounded hover:bg-blue-50"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 px-3 py-2 rounded hover:bg-blue-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 px-3 py-2 rounded hover:bg-blue-50"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors duration-300 px-4 py-2 rounded-lg shadow-sm"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mx-4 my-2 bg-white rounded-lg border border-blue-100 shadow-lg">
          <nav className="flex flex-col">
            <ul className="divide-y divide-blue-100">
              <li>
                <a
                  href="#home"
                  className="block py-3 px-4 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-3 px-4 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-3 px-4 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-3 px-4 text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
