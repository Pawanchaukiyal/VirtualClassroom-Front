// src/components/Dashboard/Overview.jsx
import React from 'react';

const Overview = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example widgets */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Upcoming Lectures</h3>
          <p>List of upcoming lectures...</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Recent Activities</h3>
          <p>Recent activities...</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
