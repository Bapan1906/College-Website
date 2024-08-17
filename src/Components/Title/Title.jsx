import React from "react";
import "./Title.css";

// Title component that accepts subTitle and title as props
const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      {/* Display the subtitle */}
      <p>{subTitle}</p>
      {/* Display the main title */}
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
