import React from 'react';
import logo from '../assets/images/logo.png';
import search from '../assets/icons/search.png';
import bell from '../assets/icons/bell.png';
import avatar from '../assets/images/avatar.png';
import down_arrow from '../assets/icons/down_arrow.png';

const Navbar: React.FC = () => {
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
            className="search-input"
          />
          <button type="submit" className="search-btn">
            <img src={search} alt="search icon" className="search-icon" />
          </button>
        </div>    
        <div className="user-info">
          <span className='info-span'>
            <p>Docs</p>
          </span>
          <span className='info-span'>
            <img src={bell} alt="bell icon" className="bell-icon" />
          </span>
          <span className='info-span'>
            <img src={avatar} alt="User" className='user-avatar' />
          </span>
          <span className='info-span'>
            <p className="user-name">Adedeji</p>
            <img src={down_arrow} alt="down arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
