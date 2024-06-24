import React from "react";
import "../Styles/ProfileCard.css";
import ProfileImage from '../img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';

function ProfileCard() {
  return (
    <div className="main-profile-card-div">
      <div className="profile-card">
        <h2>Profile</h2>
        <img
          src={ProfileImage}
          alt="User Profile"
          className="profile-photo"
        />
        <div className="profile-info">
          <h2 className="profile-name">Kate Paul</h2>
          <p className="profile-bio">
            A short bio about Kate Paul. Passionate about web development and
            design.
          </p>
          <p className="profile-location">Location: San Francisco, CA</p>
          <p className="profile-email">Email: Kate.Paul@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
