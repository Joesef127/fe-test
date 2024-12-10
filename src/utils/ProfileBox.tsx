import React from 'react';
import ProfileItem from '../utils/ProfileItem.tsx';

interface ProfileBoxProps {
  items: { item_label: string; item_text: string }[];
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ items }) => {
  return (
    <div className="profile-box">
      {items.map((item, index) => (
        <ProfileItem 
          key={index} 
          item_label={item.item_label} 
          item_text={item.item_text} 
        />
      ))}
    </div>
  );
};

export default ProfileBox;
