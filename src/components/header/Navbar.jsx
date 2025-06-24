import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bebas tracking-wider border-2 px-4 py-1 text-gray-900">
        VAULT
      </div>

      {/* Menu */}
      <ul className="flex space-x-25 font-poppins text-sm text-black uppercase">
        <li className="hover:text-gray-500 cursor-pointer">Our Services</li>
        <li className="hover:text-gray-500 cursor-pointer">Designs</li>
        <li className="hover:text-gray-500 cursor-pointer">Materials</li>
        <li className="hover:text-gray-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
