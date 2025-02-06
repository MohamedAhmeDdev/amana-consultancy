import React from 'react'

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center cursor-pointer">
          <span className="text-2xl font-serif text-navy-700">Consulto</span>
        </div>
        <div className="flex space-x-8">
          <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Home</button>
          <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">About</button>
          <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Services</button>
          <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">FAQ</button>
          <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-navy-600">Contact</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar