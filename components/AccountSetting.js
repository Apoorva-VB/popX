import React from "react";
import { useLocation } from "react-router-dom";
import "./AccountSetting.css";

const AccountSettings = () => {
  const location = useLocation();
  const userData =
    location.state?.userData || JSON.parse(localStorage.getItem("userData"));

  // Image from the public folder
  const profileImage = "/Ellipse 114.png"; // Path to the image in the public folder
  const cameraIcon = "/Group 1585.png"; // Path to the camera icon in the public folder

  return (
    <div className="account-settings-container">
      <h1>Account Settings</h1>
      <div className="user-info">
        <div className="profile-pic-container">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div className="camera-icon">
            <img
              src={cameraIcon}
              alt="Camera Icon"
              className="camera-icon-img"
            />
          </div>
        </div>
        <div className="user-details">
          <p className="user-name">{userData.fullName}</p>
          <p className="user-email">{userData.email}</p>
        </div>
      </div>
      <p className="info">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;
