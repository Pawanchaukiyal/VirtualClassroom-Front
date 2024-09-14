// src/pages/Dashboard.jsx
import React from 'react';
import Overview from '../components/Dasboard/OverView';
import RecentActivities from '../components/Dasboard/RecentActivites';

const Dashboard = () => {
  return (
    <div>
      <Overview />
      <RecentActivities />
    </div>
  );
};

export default Dashboard;
