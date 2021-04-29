import React from "react";
import "./SocialMediaLink.scss";

const SocialMediaLink = ({ src, link }) => {
  return (
    <div className="social-link-container">
      <a href={link}>
        <img className="social-icon" src={src} alt="" />
      </a>
    </div>
  );
};

export default SocialMediaLink;
