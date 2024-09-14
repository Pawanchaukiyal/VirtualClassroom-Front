import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import Card from './card/Card'; // Adjust the path as needed
import { Server } from '../constant'; // Ensure the Server variable is correctly defined

const CourseInfo = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${Server}/api/v1/class/getclass`); // Adjust the endpoint as needed
        const data = response.data.data; // Access the `data` field from the response
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.slice(0, 20).map((course, index) => (
          <Card
            key={index}
            className={course.className}
            instructor={course.instructor}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
