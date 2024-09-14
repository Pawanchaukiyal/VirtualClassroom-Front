// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold float-end z-1 text-white">Virtual Classroom</div>
      <Link to={"/"} className="text-white hover:text-gray-600">
        Home
      </Link>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300"
        />
        <div className="relative">
          <button className="p-2">🔔</button>
          {/* Notifications Dropdown */}
        </div>
        <div className="relative">
          <Link to={"/Register"}>
            <button className="p-2">👤</button>
          </Link>
          {/* User Profile Dropdown */}
        </div>
      </div>
    </header>
  );
};

export default Header;
