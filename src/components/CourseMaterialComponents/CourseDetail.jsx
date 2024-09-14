// src/components/LectureDetail.jsx
import React, { useState } from 'react';

const LectureDetail = ({ lecture }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Logic to handle posting a comment
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{lecture.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Lecture Materials</h2>
        <ul className="list-disc list-inside">
          {lecture.materials.map((material, index) => (
            <li key={index}>
              <a href={material.url} className="text-blue-500 hover:underline">
                {material.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Discussion</h2>
        <ul className="mb-4">
          {lecture.comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <p className="font-medium">{comment.author}: {comment.text}</p>
            </li>
          ))}
        </ul>
        
        <form onSubmit={handleCommentSubmit}>
          <textarea
            className="border rounded-lg w-full p-2 mb-2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default LectureDetail;
