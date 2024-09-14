// src/components/ClassList.jsx
import React from 'react';

const ClassList = ({ classes, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Class List</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem.id}>
                <td className="px-6 py-4 whitespace-nowrap">{classItem.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => onEdit(classItem.id)}>Edit</button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(classItem.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassList;
