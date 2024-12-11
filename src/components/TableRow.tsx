import React, { useState } from 'react';
import options from '../assets/icons/options.png';
import UserOptions from './UserOptions.tsx'; 

const TableRow: React.FC<{ user: any }> = ({ user }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOptionsVisible((prev) => !prev); 
  };

  const closeOptions = () => {
    setOptionsVisible(false);
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case 'inactive':
        return 'status-pill inactive';
      case 'active':
        return 'status-pill active';
      case 'pending':
        return 'status-pill pending';
      case 'blacklisted':
        return 'status-pill blacklisted';
      default:
        return 'status-pill';
    }
  };

  return (
    <div className="table-row" onClick={closeOptions}>
      <span className="table-data">{user.organization}</span>
      <span className="table-data">{user.username}</span>
      <span className="table-data">{user.email}</span>
      <span className="table-data">{user.phoneNumber}</span>
      <span className="table-data">{user.dateJoined}</span>
      <span className="table-data">
        <span className={getStatusClass(user.status)}>{user.status}</span>
        <button className="options-icon" onClick={toggleOptions}>
          <img src={options} alt="Options" />
        </button>
      </span>
        {isOptionsVisible && (
          <div className="user-options-wrapper" onClick={closeOptions}>
            <UserOptions />
          </div>
        )}
    </div>
  );
};

export default TableRow;
