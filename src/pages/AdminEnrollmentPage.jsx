// src/pages/AdminEnrollmentPage.jsx
import React, { useState } from 'react';
import EnrollmentRequestsAdmin from '../components/Enrollment/EnrollmentRequestsAdmin';

const AdminEnrollmentPage = () => {
  const [requests, setRequests] = useState([
    // Example requests
    { id: 1, studentName: 'John Doe', classTitle: 'React 101' },
    { id: 2, studentName: 'Jane Smith', classTitle: 'Advanced Node.js' },
  ]);

  const handleApproval = (requestId) => {
    // Handle approval logic here
    setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
  };

  const handleRejection = (requestId) => {
    // Handle rejection logic here
    setRequests((prevRequests) => prevRequests.filter((req) => req.id !== requestId));
  };

  return (
    <div className="container mx-auto p-4">
      <EnrollmentRequestsAdmin
        requests={requests}
        handleApproval={handleApproval}
        handleRejection={handleRejection}
      />
    </div>
  );
};

export default AdminEnrollmentPage;
