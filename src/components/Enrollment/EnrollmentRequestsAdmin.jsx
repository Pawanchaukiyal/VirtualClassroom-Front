// src/components/EnrollmentRequestsAdmin.jsx
import React from 'react';

const EnrollmentRequestsAdmin = ({ requests, handleApproval, handleRejection }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Enrollment Requests</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <ul>
          {requests.length === 0 ? (
            <p>No enrollment requests at the moment.</p>
          ) : (
            requests.map((request) => (
              <li key={request.id} className="mb-2 flex justify-between items-center">
                <div>
                  <p className="font-medium">{request.studentName}</p>
                  <p>{request.classTitle}</p>
                </div>
                <div>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                    onClick={() => handleApproval(request.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleRejection(request.id)}
                  >
                    Reject
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default EnrollmentRequestsAdmin;
