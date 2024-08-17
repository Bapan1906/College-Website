import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {  // Receiving setPlayState as a prop
  return (
    <div id="about-us" className="about">
      <div className="about-left">
        <img src={about_img} alt="University" className="about-img" />
        <img
          src={play_icon}
          alt="Play Icon"
          className="play_icon"
          onClick={() => setPlayState(true)} // Trigger video on click
        />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs...
        </p>
      </div>
    </div>
  );
};

export default About;
