import React from 'react';
import SummaryCard from './SummaryCard.tsx';
import users_badge from '../assets/icons/users_badge.png';
import active_users from '../assets/icons/active_users.png';
import users_with_loans from '../assets/icons/users_with_loans.png';
import users_with_savings from '../assets/icons/users_with_savings.png';
import UserTable from './UsersTable.tsx';

const MainContent: React.FC = () => {
  return (
    <div className="main-container">
      <div className="summary-block">
        <h2 className='summary-heading'>Users</h2>
        <div className="summary-cards-div">
          <SummaryCard icon={users_badge} label="USERS" value={2453} />
          <SummaryCard icon={active_users} label="ACTIVE USERS" value={2453} />
          <SummaryCard
            icon={users_with_loans}
            label="USERS WITH LOANS"
            value={12453}
          />
          <SummaryCard
            icon={users_with_savings}
            label="USERS WITH SAVINGS"
            value={102453}
          />
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default MainContent;
