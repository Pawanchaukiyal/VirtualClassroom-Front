// src/components/ClassDetails.jsx
import React from 'react';

const ClassDetails = ({ classDetail }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{classDetail.name} Details</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Units</h2>
        <ul>
          {classDetail.units.map((unit) => (
            <li key={unit.id} className="mb-2">
              <h3 className="text-lg font-semibold">{unit.title}</h3>
              <ul>
                {unit.sessions.map((session) => (
                  <li key={session.id}>
                    <h4 className="text-md font-medium">{session.title}</h4>
                    {/* You can add additional session details here */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassDetails;
