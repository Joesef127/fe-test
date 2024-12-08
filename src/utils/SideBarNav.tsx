import React from 'react';

interface SideBarNavProps {
  icon: string;
  label: string;
}

const SideBarNav: React.FC<SideBarNavProps> = ({ icon, label }) => {
  return (
    <div className="side-nav-container">
      <div>
        <img src={icon} alt="users badge" className="side-nav-icon" />
      </div>
      <div>
        <p className='side-nav-text'>{label}</p>
      </div>
    </div>
  );
};

export default SideBarNav;
