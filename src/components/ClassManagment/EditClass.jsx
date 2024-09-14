// src/components/ClassManagement/EditClass.jsx
import React, { useState, useEffect } from 'react';

const EditClass = ({ classId }) => {
  const [classData, setClassData] = useState(null);

  useEffect(() => {
    // Fetch class data by ID
    // setClassData(data);
  }, [classId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle class update
  };

  if (!classData) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Edit Class</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Class Title</label>
          <input
            type="text"
            value={classData.title}
            onChange={(e) => setClassData({ ...classData, title: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter class title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Units</label>
          <textarea
            value={classData.units.join('\n')}
            onChange={(e) => setClassData({ ...classData, units: e.target.value.split('\n') })}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            placeholder="Enter units, one per line"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Update Class</button>
      </form>
    </div>
  );
};

export default EditClass;
