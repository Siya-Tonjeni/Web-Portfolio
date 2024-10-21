import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center font-epilogue">
        <div className="text-lg font-bold">SIYA<span className='text-green-500'>.</span></div>
        <ul className="flex space-x-8">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#work" className="hover:text-gray-400">Work</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
