import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import user from '../assets/icons/user.png';
import star_filled from '../assets/icons/star_filled.png';
import star_blank from '../assets/icons/star_blank.png';


const UserIdentity: React.FC = () => {
  return (
    <div className="identity-wrapper">
      <div className="identity-container">
        <div className="id-box user-identity">
          <span className="user-dp">
            <img src={user} alt="user" />
          </span>
          <div className="user-info-div">
            <h3 className="user-name">Grace Effiom</h3>
            <p className="user-id">
              {uuidv4().slice(0, 11).replace('-', '').toUpperCase()}
            </p>
          </div>
        </div>
        <div className="id-box user-tier-div">
          <p className="user-tier-text">User's Tier</p>
          <span className="user-tier-icons">
            <img src={star_filled} alt="star" />
            <img src={star_blank} alt="star" />
            <img src={star_blank} alt="star" />
          </span>
        </div>
        <div className="id-box user-account-div">
          <h3 className="user-balance">N200,000.00</h3>
          <p className="user-bank">9912345678/Providus Bank</p>
        </div>
      </div>
      <div className="details-list">
        {[
          'General Details',
          'Documents',
          'Bank Details',
          'Loans',
          'Savings',
          'App and System',
        ].map((option) => (
          <p key={uuidv4()} className="list-option">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserIdentity;