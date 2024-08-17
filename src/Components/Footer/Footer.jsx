import React from "react";
import "./Footer.css";

// Footer component displaying footer content
const Footer = () => {
  return (
    <div className="footer">
      {/* Footer copyright notice */}
      <p> © 2024 Edusity. All rights reserved. </p>

      {/* Unordered list for footer links or information */}
      <ul>
        {/* List item for "Terms of Services" */}
        <li>Terms of Services</li>
        {/* List item for "Privacy Policy" (assuming it was meant to be here based on the provided example) */}
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
