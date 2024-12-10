import React from 'react';
import { Link } from 'react-router-dom';
import arrow_left from '../assets/icons/arrow_left.png';
import UserIdentity from './UserIdentity.tsx';
import UserProfile from './UserProfile.tsx';

const DetailsContent: React.FC = () => {
  return (
    <div className="details-content-container">
      <div className="details-block">
        <Link to={'/dashboard'} className="back-btn link">
          <img src={arrow_left} alt="back" className="back-icon" /> Back to
          Users
        </Link>
        <div className="details-header">
          <h2 className="details-heading">User Details</h2>
          <div className="details-button-div">
            <button className="details-btn blacklist">Blacklist User</button>
            <button className="details-btn activate">Activate User</button>
          </div>
        </div>
      </div>
        <UserIdentity />
        <UserProfile />
    </div>
  );
};

export default DetailsContent;
