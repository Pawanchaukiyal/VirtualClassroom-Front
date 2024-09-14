// src/components/StudentDashboard.jsx
import React from 'react';

const StudentDashboard = ({ classes }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">My Enrolled Classes</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul>
          {classes.length === 0 ? (
            <p>No enrolled classes.</p>
          ) : (
            classes.map((classItem) => (
              <li key={classItem.id} className="mb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium">{classItem.title}</p>
                    <p>{classItem.instructorName}</p>
                  </div>
                  <a
                    href={`/class/${classItem.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    View Class
                  </a>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default StudentDashboard;
