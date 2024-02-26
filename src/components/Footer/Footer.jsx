import React, { useRef } from 'react';
import './Footer.css';
import footLogo from '../../assets/logo 1.png';

import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import map_short from '../../assets/map_short.png'
import Gallery from '../Gallery/Gallery';
import AboutUs from '../About Us/AboutUs';
import ServicePage from '../Services/ServicePage';
const Footer = () => {
 

  const styles = {
    container: {
      position: 'absolute',
      left: '86%',
      
      display: 'flex',
      flexDirection: 'row',
      gap: '10px',
      zIndex: '9999',
      
    },
    icon: (color, hoverColor) => ({
      fontSize: '25px',
      color: color,
      transition: 'transform 0.3s',
    }),
    link: {
      textDecoration: 'none',
      color: '#fff',
      '&:hover svg': {
        transform: 'scale(1.1)',
        color: (theme) => theme.color.hoverColor,
      },
    }
  };
  
  return (
    <footer className="foot relative bg-black">
    {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('../../assets/f3.webp')"}}></div>
  
    {/* Content */}
    <div className="container mx-auto relative z-10 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 lg:py-16">
        {/* Column 1 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">About Us</h4>
          <img src={footLogo} className='footerLogo' alt="footerLogo" />
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>KK Industries: Crafting communities through precision fabrication and construction solutions, shaping futures multiple projects at a time.</p>
        </div>
  
        {/* Column 2 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Contact Us</h4>
          <br />
          <p className="text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed">Kk industries 
            21/5A
            Behind Manasa theatre
            Canara bank Road
            Konnankunte cross
            Bangalore 
            560062
          </p>
          <br/>
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>Email: kkindustrieblr@gmail.com</p>
          <p className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'>Phone: +91 98453-71516</p>
        </div>
  
        {/* Column 3 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Quick Links</h4>
          <br />
          <ul>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Home</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">About Us</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Services</Link></li> 
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Gallery</Link></li>
            <li className='text-xl lg:text-2xl mb-4 tracking-wide leading-relaxed'><Link to="/" className="navbar-link">Contact Us</Link></li>
          </ul>
        </div>
  
        {/* Column 4 */}
        <div className="text-white">
          <h4 className="text-3xl font-bold mb-4 mt-4">Follow Us</h4>
          <br />
          <div className='flex space-x-4'>
            <img className='map_short ' src={map_short} alt="map_short" />
            {/* <div className="flex space-x-4">
              <div className='social-icons'>
                <a href="https://www.instagram.com/"><FaInstagram style={styles.icon('#405DE6', '#405DE6')} /></a>
                <a href="https://www.facebook.com/"><FaFacebook style={styles.icon('#1877F2', '#1877F2')} /></a>
                <a href="mailto:kkindustrieblr@gmail.com"><FaEnvelope style={styles.icon('#EA4335', '#EA4335')} /></a>
                <a href="tel:+919845371516"><FaPhone style={styles.icon('#34A853', '#34A853')} /></a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
  
      {/* Powered by Innomatrics Technologies */}
      <h3 className="text-center text-white text-xl mb-6">Powered by Innomatrics Technologies</h3>
    </div>
  </footer>
  
  );
};

export default Footer;
