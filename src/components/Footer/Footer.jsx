// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="text-center">
        <p>&copy; 2024 Virtual Classroom</p>
        <p>
          <a href="/contact" className="underline">Contact Us</a> | 
          <a href="/privacy" className="underline"> Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
