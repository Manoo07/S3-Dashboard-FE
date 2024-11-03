// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/upload" className="text-white hover:text-gray-300">Upload File</Link>
          </li>
          <li>
            <Link to="/retrieve" className="text-white hover:text-gray-300">Retrieve Files</Link>
          </li>
          <li>
            <Link to="/download" className="text-white hover:text-gray-300">Downloads</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
