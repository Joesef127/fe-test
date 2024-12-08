import React from 'react';
import arrow_down_slim from '../assets/icons/arrow_down_slim.png';
import briefcase from '../assets/icons/briefcase.png';
import home from '../assets/icons/home.png';
import SideBarItems from '../utils/SideBarData.ts';
import SideBarSection from '../utils/SideBarSection.tsx';
import SideBarNav from '../utils/SideBarNav.tsx';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="switch-organization-div">
        <span>
          <img src={briefcase} alt="briefcase icon" />
        </span>
        <h3>Switch Organization</h3>
        <span>
          <img src={arrow_down_slim} alt="arrow down slim icon" />
        </span>
      </div>

      <SideBarNav icon={home} label="Dashboard" />

      <ul>
        {SideBarItems.map((group, index) => (
          <SideBarSection
            key={index}
            section={group.section}
            labels={group.labels}
            icons={group.icons}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
