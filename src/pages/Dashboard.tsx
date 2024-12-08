import React from 'react';
import Navbar from '../components/Navbar.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-wrapper'>
      <Navbar />
      <div className="dashboard-container">
        <h1>User Dashboard</h1>
        <p>welcome to user dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
