// src/components/SessionManagement.jsx
import React, { useState } from 'react';

const SessionManagement = ({ sessions, onAdd, onEdit, onDelete }) => {
  const [newSessionTitle, setNewSessionTitle] = useState('');

  const handleAddSession = () => {
    onAdd(newSessionTitle);
    setNewSessionTitle('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Manage Sessions</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="mb-4">
          <input
            type="text"
            value={newSessionTitle}
            onChange={(e) => setNewSessionTitle(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
            placeholder="New session title"
          />
          <button
            onClick={handleAddSession}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Session
          </button>
        </div>
        <ul>
          {sessions.map((session) => (
            <li key={session.id} className="mb-2">
              <h3 className="text-lg font-semibold">{session.title}</h3>
              <button className="text-blue-500 hover:text-blue-700 mr-2" onClick={() => onEdit(session.id)}>Edit</button>
              <button className="text-red-500 hover:text-red-700" onClick={() => onDelete(session.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SessionManagement;
