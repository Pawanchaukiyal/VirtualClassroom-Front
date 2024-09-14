import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Server } from '../../constant';

const UpdateClass = ({ classId }) => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch class details when component mounts
  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage
        const response = await axios.get(`${Server}/api/v1/class/${classId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { className, description } = response.data.data;
        setClassName(className);
        setDescription(description);
      } catch (error) {
        setError('Error fetching class details');
      }
    };

    fetchClassDetails();
  }, [classId]);

  const handleUpdate = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage

      await axios.put(
        `${Server}/api/v1/class/${classId}`,
        { className, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage('Class updated successfully');
    } catch (error) {
      setError(error.response?.data?.message || 'Error updating class');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl mb-4">Update Class</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Class Name</label>
        <input
          type="text"
          className="border p-2 w-full mt-1"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          className="border p-2 w-full mt-1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleUpdate}
        disabled={loading || !className || !description}
      >
        {loading ? 'Updating...' : 'Update Class'}
      </button>

      {/* Success/Error Messages */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default UpdateClass;
