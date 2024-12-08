import React from 'react';

interface SummaryCardProps {
  icon: string;
  label: string;
  value: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, label, value }) => {
  return (
    <div className="summary-card">
      <div className="card-icon">
        <img src={icon} alt="users badge" />
      </div>
      <div className="card-content">
        <p>{label}</p>
        <h3>{value.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default SummaryCard;
