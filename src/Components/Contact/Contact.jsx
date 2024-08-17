import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

// Contact component that includes contact information and a form
const Contact = () => {
  // State to hold the form submission result message
  const [result, setResult] = React.useState("");

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setResult("Sending...."); // Set the initial status to 'Sending....'

    const formData = new FormData(event.target); // Collect form data

    // Add your Web3Forms access key to the form data
    formData.append("access_key", "b8702993-1e4e-486b-86c0-fd1517c98a48");

    try {
      // Send a POST request to the Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json(); // Parse the JSON response

      if (data.success) {
        // If the form submission is successful
        setResult("Form Submitted Successfully");
        event.target.reset(); // Reset the form fields
      } else {
        // If there is an error
        console.log("Error", data);
        setResult(data.message); // Display the error message
      }
    } catch (error) {
      // Handle any network errors
      console.error("Network Error:", error);
      setResult(
        "There was a problem submitting the form. Please try again later."
      );
    }
  };

  return (
    <div id="contact-us" className="contact">
      {/* Left Column: Contact Information */}
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="Message Icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          {/* Email contact information */}
          <li>
            <img src={mail_icon} alt="Email Icon" /> bdd5523573@gmail.com
          </li>
          {/* Phone contact information */}
          <li>
            <img src={phone_icon} alt="Phone Icon" /> 6091042921
          </li>
          {/* Location contact information */}
          <li>
            <img src={location_icon} alt="Location Icon" /> Kolkata 700001
          </li>
        </ul>
      </div>

      {/* Right Column: Contact Form */}
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          {/* Name Input */}
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name."
            required
          />

          {/* Phone Number Input */}
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number."
            required
          />

          {/* Message Textarea */}
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message."
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="Arrow Icon" />
          </button>
        </form>

        {/* Display the result message */}
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
