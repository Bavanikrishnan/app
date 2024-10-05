import React, { useState } from 'react';
import './header.css'; // Ensure that the CSS is linked correctly
import { Link } from 'react-scroll'; // Link for smooth scrolling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu toggle state

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {/* Hamburger icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="homesection" smooth={true} duration={300} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="aboutsection" smooth={true} duration={300} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="skillsection" smooth={true} duration={500} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projectsection" smooth={true} duration={500} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contactsection" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
