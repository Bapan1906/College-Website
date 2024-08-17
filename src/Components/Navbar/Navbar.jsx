import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  // State to handle whether the navbar is sticky
  const [sticky, setSticky] = useState(false);
  // State to handle the mobile menu visibility
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // If scrolled more than 100px, set sticky navbar
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      {/* Logo image */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Navigation links */}
      <ul
        className={`nav-links ${
          mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"
        }`}
      >
        <li>
          {/* Link to the hero section */}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {/* Link to the program section */}
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {/* Link to the about us section */}
          <Link to="about-us" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          {/* Link to the campus section */}
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          {/* Link to the testimonials section */}
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          {/* Link to the contact us section with a button */}
          <Link to="contact-us" smooth={true} offset={-100} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>

      {/* Menu icon for mobile view */}
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
