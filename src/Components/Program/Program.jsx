import React from "react";
import "./Program.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      {/* Program Section 1 */}
      <div className="program">
        {/* Image for the program */}
        <img src={program_1} alt="Graduation Degree" />

        {/* Caption with icon and description */}
        <div className="caption">
          {/* Icon for the program */}
          <img src={program_icon_1} alt="Graduation Degree Icon" />
          {/* Description */}
          <p>Graduation Degree</p>
        </div>
      </div>

      {/* Program Section 2 */}
      <div className="program">
        {/* Image for the program */}
        <img src={program_2} alt="Master Degree" />

        {/* Caption with icon and description */}
        <div className="caption">
          {/* Icon for the program */}
          <img src={program_icon_2} alt="Master Degree Icon" />
          {/* Description */}
          <p>Master Degree</p>
        </div>
      </div>

      {/* Program Section 3 */}
      <div className="program">
        {/* Image for the program */}
        <img src={program_3} alt="Post Graduation Degree" />

        {/* Caption with icon and description */}
        <div className="caption">
          {/* Icon for the program */}
          <img src={program_icon_3} alt="Post Graduation Degree Icon" />
          {/* Description */}
          <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
