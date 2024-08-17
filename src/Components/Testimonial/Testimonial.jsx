import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  // Reference to the slider element for controlling its position
  const slider = useRef();
  let tx = 0; // Variable to track the current translation value of the slider

  // Function to slide the testimonials forward
  const slideForword = () => {
    // Only slide forward if the current translation is more than -50%
    if (tx > -50) {
      tx -= 25; // Move slider 25% to the left
    }
    slider.current.style.transform = `translateX(${tx}%)`; // Apply the translation to the slider
  };

  // Function to slide the testimonials backward
  const slideBackword = () => {
    // Only slide backward if the current translation is less than 0%
    if (tx < 0) {
      tx += 25; // Move slider 25% to the right
    }
    slider.current.style.transform = `translateX(${tx}%)`; // Apply the translation to the slider
  };

  return (
    <div className="testimonials">
      {/* Button to slide forward */}
      <img
        src={next_icon}
        alt="Next"
        className="next-btn"
        onClick={slideForword}
      />
      {/* Button to slide backward */}
      <img
        src={back_icon}
        alt="Back"
        className="back-btn"
        onClick={slideBackword}
      />
      <div className="slider">
        <ul ref={slider}>
          {/* Testimonial Item 1 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="User 1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>

          {/* Testimonial Item 2 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="User 2" />
                <div>
                  <h3>Michael Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Selecting Edusity has been a truly transformative experience for
                me. The enthusiastic and inclusive community, top-notch
                resources, and steadfast dedication to academic excellence have
                not only met but greatly exceeded my expectations, enriching my
                overall learning journey.
              </p>
            </div>
          </li>

          {/* Testimonial Item 3 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="User 3" />
                <div>
                  <h3>Jessica Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Opting for Edusity was undoubtedly one of the most rewarding
                choices I've made. The dynamic and welcoming environment,
                advanced facilities, and relentless pursuit of academic
                excellence have far exceeded my expectations and truly enriched
                my learning experience.
              </p>
            </div>
          </li>

          {/* Testimonial Item 4 */}
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="User 4" />
                <div>
                  <h3>Christopher Smith</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Deciding to enroll at Edusity was a decision I will always
                cherish. The vibrant and inclusive community, cutting-edge
                resources, and unwavering dedication to educational success have
                surpassed all my hopes and aspirations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
