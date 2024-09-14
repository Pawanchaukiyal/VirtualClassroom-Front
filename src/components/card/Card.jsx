// components/Card.js
import React from 'react';

const Card = ({ className, instructor, description }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:rotate-[3deg] hover:scale-105 hover:shadow-xl hover:opacity-90 hover:translate-x-2">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{className}</h3>
        <p className="text-gray-600 mb-4">Instructor: <span className="font-medium">{instructor}</span></p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Card;
