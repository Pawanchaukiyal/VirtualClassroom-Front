// src/components/Auth/PasswordReset.jsx
import React from 'react';

const PasswordReset = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 p-2 w-full border border-gray-300 rounded" placeholder="Enter your email" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
