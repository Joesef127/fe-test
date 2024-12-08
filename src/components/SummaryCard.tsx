import React from 'react';

interface SummaryCardProps {
  icon: string;
  label: string;
  value: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value }) => {
  return (
    <div className="summary-card">
      <div>
        <img src={icon} alt="users badge" className="users-card-icon" />
      </div>
      <div className="users-card-content">
        <p className="users-text">{label}</p>
        <h3 className="users-value">{value.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default SummaryCard;
