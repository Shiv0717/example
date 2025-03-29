import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-white text-2xl font-bold">Business Setu</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-lg">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Product</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
          <li className="hover:text-gray-400 cursor-pointer">About Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
