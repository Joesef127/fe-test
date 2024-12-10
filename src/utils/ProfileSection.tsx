import React from 'react';
import ProfileBox from '../utils/ProfileBox.tsx';

interface ProfileSectionProps {
  heading: string | null;
  items: { item_label: string; item_text: string }[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ heading, items }) => {
  return (
    <div className="profile-section">
      <h3 className="section-heading">{heading}</h3>
      <ProfileBox items={items} />
      {/* <ProfileBox items={items} /> */}
    </div>
  );
};

export default ProfileSection;
