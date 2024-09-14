import React, { useState } from 'react';
import axios from 'axios';
import { Server } from '../../constant';

const DeleteClass = ({ classId }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const token = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage

      await axios.delete(`${Server}/api/v1/class/${classId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Class deleted successfully');
    } catch (error) {
      setError(error.response?.data?.message || 'Error deleting class');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 border border-gray-300 rounded-lg">
      <h2 className="text-2xl mb-4">Delete Class</h2>
      <p>Are you sure you want to delete this class?</p>

      <button
        className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleDelete}
        disabled={loading}
      >
        {loading ? 'Deleting...' : 'Delete Class'}
      </button>

      {/* Success/Error Messages */}
      {message && <p className="mt-4 text-green-600">{message}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default DeleteClass;
