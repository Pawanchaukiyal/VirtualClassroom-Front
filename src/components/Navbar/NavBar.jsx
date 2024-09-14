import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa"; // Import icons from react-icons
import { useMediaQuery } from 'react-responsive'; // For responsive design

const NavBar = () => {
  // Check if the screen width is less than 768px
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center text-xl font-bold">
            VC
          </div>
          <span className="text-lg font-bold">Virtual Classroom</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className={`flex ${isMobile ? 'flex-col items-start' : 'flex-row items-center'} space-y-2 ${isMobile ? 'mt-2' : 'space-x-4'}`}>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="relative">
          <button className="p-2 text-xl hover:bg-blue-700 rounded-full transition">
            <FaBell />
          </button>
          {/* Notifications Dropdown (for future implementation) */}
        </div>
        <div className="relative">
          <Link to="/register">
            <button className="p-2 text-xl hover:bg-blue-700 rounded-full transition">
              <FaUserCircle />
            </button>
          </Link>
          {/* User Profile Dropdown (for future implementation) */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
