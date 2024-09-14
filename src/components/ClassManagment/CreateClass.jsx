// src/components/ClassManagement/CreateClass.jsx
import React, { useState } from 'react';

const CreateClass = () => {
  const [title, setTitle] = useState('');
  const [units, setUnits] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle class creation
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Create New Class</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Class Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter class title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Units</label>
          <textarea
            value={units.join('\n')}
            onChange={(e) => setUnits(e.target.value.split('\n'))}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter units, one per line"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Create Class</button>
      </form>
    </div>
  );
};

export default CreateClass;
