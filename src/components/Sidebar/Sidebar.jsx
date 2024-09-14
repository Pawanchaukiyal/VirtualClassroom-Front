// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-full p-4 fixed top-0 left-0">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/classes" className="block p-2 hover:bg-gray-600 rounded">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/units" className="block p-2 hover:bg-gray-600 rounded">
              Units
            </Link>
          </li>
          <li>
            <Link
              to="/sessions"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              Sessions
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block p-2 hover:bg-gray-600 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/Course-Materials"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              CourseMaterials
            </Link>
          </li>
          <li>
            <Link
              to="/class-management"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              ClassManagement
            </Link>
          </li>
          <li>
            <Link
              to="/discussion-forum"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              DiscussionFourm
            </Link>
          </li>
          <li>
            <Link
              to="/enrollment"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              Enrollments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
