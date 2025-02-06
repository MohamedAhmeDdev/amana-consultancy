import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="text-2xl font-serif text-navy-700">
              Amana Consultancy
            </Link>
          </div>

          {/* Hamburger menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="space-y-2 px-6 py-2"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
              <div className="w-8 h-0.5 bg-blue-600"></div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">
              Home
            </Link>
            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">
              About
            </Link>
            <Link to="/services" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">
              Services
            </Link>
            <Link to="/faqs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">
              FAQ
            </Link>
            <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-gray-50">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-gray-50">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-gray-50">
                Services
              </Link>
              <Link to="/faqs" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-gray-50">
                FAQ
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-navy-600 hover:bg-gray-50">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;