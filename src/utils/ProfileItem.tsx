import React from 'react';

interface ProfileItemProps {
  item_label: string | null;
  item_text: string | null;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ item_label, item_text }) => {
  return (
    <div className="profile-item">
      <p className="item-label">{item_label}</p>
      <p className="item-text">{item_text}</p>
    </div>
  );
};

export default ProfileItem;
