import React, { useState } from "react";
import axios from "axios";
import { Server } from "../../constant";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "", // Update field name to match the backend
    email: "",
    password: "",
    gender: "",
    age: "",
    role: "student", // Default role as 'student' to match the backend
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the registration data to the backend API
      const response = await axios.post(
        `${Server}/api/v1/users/register`,
        formData
      );
      setMessage(response.data.message); // Success message from backend
      setError(""); // Clear error message if successful
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setMessage(""); // Clear success message if there is an error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>{" "}
              {/* Ensure case-sensitive match */}
              <option value="Female">Female</option>{" "}
              {/* Ensure case-sensitive match */}
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 text-green-500">{message}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <p className="mt-4 text-center">
          <a href="/login" className="text-blue-600">
            Already have an account?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
