import React from "react";
import eye from '../assets/icons/eye.png';
import user_activate from '../assets/icons/user_activate.png';
import user_blacklist from '../assets/icons/user_blacklist.png';
import { Link } from "react-router-dom";

const UserOptions: React.FC = () => {
  return (
    <div className="user-options-container">
      <div className="user-option">
        <img src={eye} alt="eye" className="option-icon" />
        <Link to={"/details"} className="option-text link">View Details</Link>
      </div>
      <div className="user-option">
        <img src={user_blacklist} alt="blacklist" className="option-icon" />
        <p className="option-text">Blacklist User</p>
      </div>
      <div className="user-option">
        <img src={user_activate} alt="activate" className="option-icon" />
        <p className="option-text">Activate User</p>
      </div>
    </div>
  );
}

export default UserOptions;