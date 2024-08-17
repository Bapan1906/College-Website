import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

// Campus component that displays a gallery of campus images and a button
const Campus = () => {
  return (
    <div className="campus">
      {/* Gallery section containing campus images */}
      <div className="gallery">
        {/* Image 1 of the campus gallery */}
        <img src={gallery_1} alt="Campus Gallery 1" />
        {/* Image 2 of the campus gallery */}
        <img src={gallery_2} alt="Campus Gallery 2" />
        {/* Image 3 of the campus gallery */}
        <img src={gallery_3} alt="Campus Gallery 3" />
        {/* Image 4 of the campus gallery */}
        <img src={gallery_4} alt="Campus Gallery 4" />
      </div>

      {/* Button to see more campus images or information */}
      <button className="btn dark-btn">
        See more here
        {/* Arrow icon to indicate more content */}
        <img src={white_arrow} alt="Arrow Icon" />
      </button>
    </div>
  );
};

export default Campus;
