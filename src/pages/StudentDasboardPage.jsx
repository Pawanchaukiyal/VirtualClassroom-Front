// src/pages/StudentDashboardPage.jsx
import React, { useState } from 'react';
import StudentDashboard from '../components/StudentDashboard';

const StudentDashboardPage = () => {
  const [classes, setClasses] = useState([
    // Example enrolled classes
    { id: 1, title: 'React 101', instructorName: 'John Instructor' },
    { id: 2, title: 'Advanced Node.js', instructorName: 'Jane Instructor' },
  ]);

  return (
    <div className="container mx-auto p-4">
      <StudentDashboard classes={classes} />
    </div>
  );
};

export default StudentDashboardPage;
