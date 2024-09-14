// src/components/LectureList.jsx
import React from 'react';

const LectureList = ({ lectures, onSelectLecture }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Lecture List</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul>
          {lectures.map((lecture) => (
            <li
              key={lecture.id}
              className="mb-2 flex justify-between items-center"
            >
              <span className="text-lg font-medium">{lecture.title}</span>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => onSelectLecture(lecture.id)}
              >
                View Lecture
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LectureList;
