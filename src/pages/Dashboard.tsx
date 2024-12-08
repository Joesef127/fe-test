import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Sidebar from '../components/Sidebar.tsx';
import MainContent from '../components/MainContent.tsx';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-wrapper'>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <MainContent /> 
      </div>
    </div>
  );
};

export default Dashboard;
