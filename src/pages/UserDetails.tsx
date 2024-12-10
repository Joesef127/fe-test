import React from 'react';
import Sidebar from '../components/Sidebar.tsx';
import Navbar from '../components/Navbar.tsx';
import DetailsContent from '../components/DetailsContent.tsx';

const UserDetails: React.FC = () => {
  return (
    <div className="details-wrapper">
      <Navbar />
      <div className="details-container">
        <Sidebar />
        <DetailsContent />
      </div>
    </div>
  );
};

export default UserDetails;
