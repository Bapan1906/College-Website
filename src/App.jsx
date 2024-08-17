import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Program/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

// Main App component
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      {/* Navbar component for site navigation */}
      <Navbar />

      {/* Hero section displaying the main introduction */}
      <Hero />

      <div className="container">
        {/* Title component for the Program section */}
        <Title subTitle="Our Program" title="What We Offer" />
        {/* Program component showcasing available programs */}
        <Program />

        {/* About component providing information about the university */}
        <About setPlayState = {setPlayState}/>

        {/* Title component for the Campus section */}
        <Title subTitle="Gallery" title="Campus Photos" />
        {/* Campus component displaying campus images */}
        <Campus />

        {/* Title component for the Testimonials section */}
        <Title subTitle="Testimonials" title="What Students Say" />
        {/* Testimonial component showcasing student feedback */}
        <Testimonial />

        {/* Title component for the Contact Us section */}
        <Title subTitle="Contact Us" title="Get in Touch" />
        {/* Contact component for user inquiries */}
        <Contact />

        {/* Footer component for site footer information */}
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
