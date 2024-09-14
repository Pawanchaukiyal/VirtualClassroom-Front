// components/OccupationCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhoCard = ({ occupation, image, button }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${occupation}`);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out hover:rotate-[3deg] hover:scale-105 hover:shadow-xl hover:opacity-90 hover:translate-x-2">
      <img src={image} alt={occupation} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">{occupation}</h3>
        <button
          onClick={handleClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default WhoCard;
