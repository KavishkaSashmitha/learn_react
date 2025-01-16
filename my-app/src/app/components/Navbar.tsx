'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              Brand
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="/pages"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Pages
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
          >
            Home
          </a>
          <a
            href="/pages"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
          >
            Pages
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
