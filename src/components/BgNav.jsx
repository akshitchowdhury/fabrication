import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './BgNav.css';

const Navbar = () => {
  // Create a ref for the About Us section
  const aboutUsRef = useRef(null);

  // Function to scroll to the About Us section
  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-cover">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* <Link to="/" className="navbar-logo">
          <img src={Logo} alt="logo" className="max-h-16 max-w-full" />
        </Link> */}
        <div className="navbar-links">
          {/* Scroll to the About Us section when the link is clicked */}
          
          <Link to="/"  className="navbar-link">Home</Link>
          <Link to="/" onClick={scrollToAboutUs} className="navbar-link">About Us</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </div>
      </div>
      {/* Invisible reference to the About Us section */}
      <div ref={aboutUsRef}></div>
    </nav>
  );
}

export default Navbar;
