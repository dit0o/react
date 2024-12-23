import React from "react";
import "./ProfileCard.css";

function ProfileCard({ profile }) {
  const { name, image, description } = profile;

  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
