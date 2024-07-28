import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={toggleNavbar}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/satish" className="nav-links" onClick={toggleNavbar}>
              User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
