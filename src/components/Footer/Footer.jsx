import React from 'react';

import './Footer.css'
import footLogo from '../../assets/logo 1.png'
import { FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';



const Footer = () => {
  
  const styles = {
  container: {
    position: 'absolute',
    // top: '50%',
    left: '70%',
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    zIndex: '9999',
  },
  icon: (color, hoverColor) => ({
    fontSize: '25px', // Adjust the font size here
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
  }}
  
  
  return (
    
    <footer className="foot relative bg-black py-28" >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('../../assets/f3.webp')"}}></div>

      {/* Content */}
      <div className="container mx-auto relative z-10"style={{ marginTop: "-55px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-white">
            <h4 className="text-2xl font-bold mb-6">About Us</h4>
            <img src={footLogo} className='footerLogo' alt="footerLogo" />
            <p>KK Industries: Crafting communities through precision fabrication and construction solutions, shaping futures one project at a time.</p>
          </div>

          {/* Column 2 */}
          <div className="text-white">
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <p>Kk industries 
21/5A
Behind Manasa theatre
Canara bank Road
Konnankunte cross
Bangalore 
560062</p>
<br/>
            <p>Email: kkindustrieblr@gmail.com</p>
            <p>Phone: +91 98453-71516
</p>
          

          </div>

          {/* Column 3 */}
          <div className="text-white">
            <h4 className="follow text-2xl font-bold mb-4 text-left">Follow Us</h4>
            <div className="flex space-x-4">
              
            <div className='social-icons' style={styles.container}>
      <a href="https://www.instagram.com/" style={styles.link}><FaInstagram style={styles.icon('#405DE6', '#405DE6')} /></a>
      <a href="https://www.facebook.com/" style={styles.link}><FaFacebook style={styles.icon('#1877F2', '#1877F2')} /></a>
      <a href="kkindustrieblr@gmail.com" style={styles.link}><FaEnvelope style={styles.icon('#EA4335', '#EA4335')} /></a>
      <a href="tel:+123456789" style={styles.link}><FaPhone style={styles.icon('#34A853', '#34A853')} /></a>
    </div>
              
              {/* Add more social icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};




export default Footer;
