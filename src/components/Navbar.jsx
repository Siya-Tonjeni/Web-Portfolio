import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center font-epilogue">
        <div className="text-lg font-bold"><Link to='/'>SIYA<span className='text-green-500'>.</span></Link></div>
        <ul className="flex space-x-8">
          <li><Link to='/about' className="hover:text-gray-400">About</Link></li>
          <li><Link to='/projects' className="hover:text-gray-400 cursor-pointer">Work</Link></li>
          <li><Link to='/contact' className="hover:text-gray-400 cursor-pointer">Contact</Link></li>
          <li><a href= '#resume' className="hover:text-gray-400 cursor-pointer">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
