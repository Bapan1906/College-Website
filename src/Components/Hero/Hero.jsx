import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

// Hero component for the main introductory section of the page
const Hero = () => {
  return (
    <div className="hero container">
      {/* Container for the hero section text */}
      <div className="hero-text">
        {/* Main heading for the hero section */}
        <h1>We ensure better education for a better world</h1>

        {/* Paragraph providing additional details about the curriculum */}
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>

        {/* Button to explore more with an arrow icon */}
        <button className="btn">
          Explore More <img src={dark_arrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
