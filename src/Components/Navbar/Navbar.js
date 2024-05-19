import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importing the hamburger icon
import './Navbar.css';
import { ActivePageContext } from '../../Context/ActivePageContext';

export default function Navbar() {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false); // Close the menu on link click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-brand">Portfolio</h1>
      <FaBars className="menu-icon" onClick={toggleMenu} />
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className={activePage === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => handleNavClick('home')}>Home</Link>
        </li>
        <li className={activePage === 'about' ? 'active' : ''}>
          <Link to="/aboutme" onClick={() => handleNavClick('about')}>About</Link>
        </li>
        <li className={activePage === 'services' ? 'active' : ''}>
          <Link to="/services" onClick={() => handleNavClick('services')}>Services</Link>
        </li>
        <li className={activePage === 'projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => handleNavClick('projects')}>Projects</Link>
        </li>
        <li className={activePage === 'certificates' ? 'active' : ''}>
          <Link to="/certificates" onClick={() => handleNavClick('certificates')}>Certificates</Link>
        </li>
        <li className={activePage === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => handleNavClick('contact')}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
