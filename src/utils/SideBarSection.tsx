import React from 'react';
import SideBarNav from '../utils/SideBarNav.tsx';

interface SideBarSectionProps {
  section: string;
  labels: string[];
  icons: string[];
}

const SideBarSection: React.FC<SideBarSectionProps> = ({
  section,
  labels,
  icons,
}) => {
  return (
    <li className='side-bar-section-container'>
      <h4 className='side-bar-section'>{section}</h4>
      <ul className='side-bar-section-list'>
        {labels.map((label, index) => (
          <SideBarNav key={index} icon={icons[index]} label={label} />
        ))}
      </ul>
    </li>
  );
};

export default SideBarSection;
