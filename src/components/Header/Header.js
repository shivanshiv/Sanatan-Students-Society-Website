import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="header">
        <img src="/sss_images/logo.png" alt="" className="logo" />
        <h1 className="spaced">Sanatan Students&#39; Society</h1>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      
      <div className={`side-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/calendar" onClick={closeMenu}>Calendar</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <Link to='/pastevents' onClick={closeMenu}>Past Events</Link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeL2xxK6ZpGSOrkgd-WCAgAvSUNGWditbfuxdSnivl_t-72WQ/viewform?usp=header" onClick={closeMenu}>Bursary Application</a>
        <Link to='/volunteering' onClick={closeMenu}>Volunteering Opportunities</Link>
        <Link to='/hiring' onClick={closeMenu}>Executive Applications</Link>
        <a href="https://forms.gle/gWW8i3982g7FELox8" onClick={closeMenu}>Sign Up</a>
      </div>
      
      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </div>
  );
};

export default Header;