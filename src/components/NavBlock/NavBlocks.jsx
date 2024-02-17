import React, { useRef } from 'react';
import './NavBlocks.css';
import Gallery from '../Gallery/Gallery';
import AboutUs from '../About Us/AboutUs';
import ContactComponent from '../Contact/ContactComponent';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

import './BgNav.css'

import ServicePage from '../Services/ServicePage';
import Text from './Text_Slide/Text';
import mainLogo from '../../assets/logo 1.png'
const NavBlocks = () => {
  // Create refs for the sections
  const aboutUsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);

  // Function to scroll smoothly to a specific section 
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
     <div className='navBlock'>
      <nav className="bg-cover">

      <div class="logo flex items-start justify-start px-3 py-2 mx-auto max-w-screen-xl">
    <img src={mainLogo} alt="logo" />
    </div>
  
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/*  */}
          <div className="link-tab navbar-links flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-auto ">
            <Link to="/" className="navbar-link ">Home</Link>
            <Link to="/" onClick={() => handleClick(aboutUsRef)} className="navbar-link">About Us</Link>
            <Link to="/" onClick={() => handleClick(servicesRef)} className="navbar-link">Services</Link>
            <Link to="/" onClick={() => handleClick(galleryRef)} className="navbar-link">Gallery</Link>
            <Link to="/" onClick={() => handleClick(contactRef)} className="navbar-link">Contact Us</Link>
            
          </div>
        </div>
        <Text/>
      </nav>
    </div>

      <div className='aboutUs'>
        <AboutUs ref={aboutUsRef} />
      </div>
      

      <div className='galleria'>
        <Gallery ref= {galleryRef} />
      </div>

      <div className='services'>
      <ServicePage ref= {servicesRef}/>
      </div>

      <div className='contact'>
        <ContactComponent ref= {contactRef} />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </>
  );
}

export default NavBlocks;
