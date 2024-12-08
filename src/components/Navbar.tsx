import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo-div">
        <img src={logo} alt="lendsqr logo" className="navbar-logo" />
      </div>
      <div className="nav-contents">
        <div className="nav-search-box">
          <input
            type="text"
            placeholder="Search for anything"
            className="search"
          />
        </div>
        <div className="user-info">
          <span>Docs</span>
          <img src="/path-to-user-avatar.png" alt="User" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
