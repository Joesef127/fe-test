import React from 'react';

const UserFilter: React.FC = () => {
  return (
    <form id='user-filter' className="user-filter">
      <div className="filter-box">
        <label htmlFor="organization" className="filter-label">
          Organization
        </label>
        <select name="organization" id="organization" className="filter-input">
          <option value="">All</option>
          <option value="lendsqr">Lendsqr</option>
          <option value="irorun">Irorun</option>
          <option value="Lendstar">Lendstar</option>
        </select>
      </div>
      <div className="filter-box">
        <label htmlFor="username" className="filter-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="filter-input"
          placeholder='User'
        />
      </div>
      <div className="filter-box">
        <label htmlFor="Email" className="filter-label">
          Email
        </label>
        <input type="email" id="email" name="email" className="filter-input" placeholder='Email' />
      </div>
      <div className="filter-box">
        <label htmlFor="date" className="filter-label">
          Date
        </label>
        <input type="date" id="date" name="date" className="filter-input" placeholder='Date' />
      </div>
      <div className="filter-box">
        <label htmlFor="phoneNumber" className="filter-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="filter-input"
          placeholder='Phone Number'
        />
      </div>
      <div className="filter-box">
        <label htmlFor="status" className="filter-label">
          Status
        </label>
        <select name="status" id="status" className="filter-input">
          <option value="">All</option>
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
      </div>
      <div className="button-box">
        <button type="reset" className="filter-button reset-btn">
          Reset
        </button>
        <button type="submit" form='user-filter' className="filter-button submit-btn">
          Filter
        </button>
      </div>
    </form>
  );
};

export default UserFilter;