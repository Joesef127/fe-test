import React from 'react';
import options from '../assets/icons/options.png';

const TableRow: React.FC<{ user: any }> = ({ user }) => {
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
    <div className="table-row">
      <span className="table-data">{user.organization}</span>
      <span className="table-data">{user.username}</span>
      <span className="table-data">{user.email}</span>
      <span className="table-data">{user.phoneNumber}</span>
      <span className="table-data">{user.dateJoined}</span>
      <span className="table-data">
        <span className={getStatusClass(user.status)}>{user.status}</span>
        <span className="options-icon">
          <img src={options} alt=":" />
        </span>
      </span>
    </div>
  );
};

export default TableRow;
