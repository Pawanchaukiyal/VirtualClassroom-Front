// src/components/UnitManagement.jsx
import React, { useState } from 'react';

const UnitManagement = ({ units, onAdd, onEdit, onDelete }) => {
  const [newUnitTitle, setNewUnitTitle] = useState('');

  const handleAddUnit = () => {
    onAdd(newUnitTitle);
    setNewUnitTitle('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Units</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <input
            type="text"
            value={newUnitTitle}
            onChange={(e) => setNewUnitTitle(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            placeholder="New unit title"
          />
          <button
            onClick={handleAddUnit}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Unit
          </button>
        </div>
        <ul>
          {units.map((unit) => (
            <li key={unit.id} className="mb-2">
              <h3 className="text-lg font-semibold">{unit.title}</h3>
              <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => onEdit(unit.id)}>Edit</button>
              <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(unit.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UnitManagement;
