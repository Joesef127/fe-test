import React from 'react';
import ProfileSection from '../utils/ProfileSection.tsx';

const Profile: React.FC = () => {
  const personalInfo = [
    { item_label: 'Full Name', item_text: 'Grace Effiom' },
    { item_label: 'Phone Number', item_text: '07060780922' },
    { item_label: 'Email Address', item_text: 'grace@gmail.com' },
    { item_label: 'BVN', item_text: '07060780922' },
    { item_label: 'Gender', item_text: 'Female' }
  ];

  const personalInfo2 = [
    { item_label: 'Marital Status', item_text: 'Single' },
    { item_label: 'Children', item_text: 'None' },
    { item_label: 'Type of Residence', item_text: 'Parent’s Apartment' },
  ];

  const educationEmployment = [
    { item_label: 'Level of Education', item_text: 'B.Sc' },
    { item_label: 'Employment Status', item_text: 'Employed' },
    { item_label: 'Sector of Employment', item_text: 'FinTech' },
    { item_label: 'Duration of Employment', item_text: '2 years' }
  ];

  const educationEmployment2 = [
    { item_label: 'Office Email', item_text: 'grace@lendsqr.com' },
    { item_label: 'Monthly Income', item_text: '₦200,000.00 - ₦400,000.00' },
    { item_label: 'Loan Repayment', item_text: '40,000' },
  ];

  const socials = [
    { item_label: 'Twitter', item_text: '@grace_effiom' },
    { item_label: 'Facebook', item_text: 'Grace Effiom' },
    { item_label: 'Instagram', item_text: '@grace_effiom' },
  ];

  const guarantor = [
    { item_label: 'Full Name', item_text: 'Debby Ogana' },
    { item_label: 'Phone Number', item_text: '07060780922' },
    { item_label: 'Email Address', item_text: 'debby@gmail.com' },
    { item_label: 'Relationship', item_text: 'Sister' },
  ];

  return (
    <div className="profile-page">
      <ProfileSection heading="Personal Information" items={personalInfo} />
      <ProfileSection heading={null} items={personalInfo2} />
      <ProfileSection heading="Education and Employment" items={educationEmployment} />
      <ProfileSection heading={null} items={educationEmployment2} />
      <ProfileSection heading="Socials" items={socials} />
      <ProfileSection heading="Guarantor" items={guarantor} />
    </div>
  );
};

export default Profile;
