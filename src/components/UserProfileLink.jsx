import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/UserProfileLink.css';
import ProfileImage from "../img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg";

const UserProfileLink = () => {
  return (
    <div className="user-profile-link">
      <img
        src={ProfileImage}
        alt="User Profile"
        className="user-photo"
      />
      <div className="user-info">
        <span className="user-name">Kate Paul</span>
        <Link to="/Profile Card" className="profile-link">View Profile</Link>
      </div>
    </div>
  );
};

export default UserProfileLink;
