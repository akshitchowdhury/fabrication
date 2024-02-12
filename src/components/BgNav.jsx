import React from 'react'
import './BgNav.css'



import bg from '../assets/fbg2.jpg'
import { Link } from 'react-router-dom'
const BgNav = () => {
  return (
    <div className='main-bg' >
        {/* <img src= {bg} alt="bg" /> */}
        <nav className="navbar" >
      <div className="navbar-container">
        {/* <Link to="/" className="navbar-logo">
          <img src={Logo} alt="logo" style={{ maxHeight: '50px', maxWidth: '150px' }} />
        </Link> */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/gallery" className="navbar-link">Gallery</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </div>
        <br/>
        
      </div>
      </nav>
    </div>
  )
}

export default BgNav