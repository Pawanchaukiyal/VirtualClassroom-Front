import React, { useState } from 'react';
import axios from 'axios';
import { Server } from '../../constant'; // Ensure this points to your backend server URL

const CreateClass = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [units, setUnits] = useState([]); // For now, we're keeping units as an empty array
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true); // Show loading state while creating the class
    setError('');
    setMessage('');

    try {
      const token = localStorage.getItem('token'); // Assuming you're storing the JWT token in localStorage after login
      const instructorId = 'YOUR_LOGGED_IN_INSTRUCTOR_ID'; // Replace this with logic to get the logged-in instructor ID

      const response = await axios.post(
        `${Server}/api/v1/class/classroute`,
        {
          className,
          description,
          instructor: instructorId,
          units, // Keeping it empty for now, can be expanded later
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in the Authorization header
          },
        }
      );

      setMessage(`Class "${response.data.data.className}" created successfully`);
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating class');
    } finally {
      setLoading(false); // Stop loading state after request
    }
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4 font-semibold">Create a New Class</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Class Name</label>
        <input
          type="text"
          className="border p-2 w-full mt-1"
          placeholder="Enter class name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="border p-2 w-full mt-1"
          placeholder="Enter class description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleCreate}
        disabled={loading || !className || !description}
      >
        {loading ? 'Creating...' : 'Create Class'}
      </button>

      {/* Success/Error Messages */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default CreateClass;
