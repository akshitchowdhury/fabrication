// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BgNav.css'


const Navbar = () => {
  return (
    <nav className="bg-cover">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <Link to="/" className="navbar-logo">
          <img src={Logo} alt="logo" className="max-h-16 max-w-full" />
        </Link> */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar;