import React from 'react';

import './Footer.css'
const Footer = () => {
  return (
    <footer className="foot relative bg-gray-800 py-28" >
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{backgroundImage: "url('../../assets/f3.webp')"}}></div>

      {/* Content */}
      <div className="container mx-auto relative z-10"style={{ marginTop: "-55px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="text-white">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus blandit ligula.</p>
          </div>

          {/* Column 2 */}
          <div className="text-white">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>

          {/* Column 3 */}
          <div className="text-white">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.54 9.06c-.07.52-.25.94-.54 1.27.01.11.01.23.01.35 0 3.48-2.65 7.51-7.5 7.51-1.49 0-2.88-.43-4.06-1.18a5.368 5.368 0 0 0 1.47-.67 2.718 2.718 0 0 1-2.54-1.88 2.749 2.749 0 0 0 1.22-.05 2.714 2.714 0 0 1-2.18-2.67v-.03a2.708 2.708 0 0 0 1.23.34 2.714 2.714 0 0 1-.84-3.62 7.73 7.73 0 0 0 5.61 2.85 2.707 2.707 0 0 1 4.62-2.47 5.43 5.43 0 0 0 1.71-.65 2.714 2.714 0 0 1-1.19 1.49 5.43 5.43 0 0 0 1.94-.52 5.497 5.497 0 0 1-1.35 1.39z"/>
                </svg>
              </a>
              {/* Add more social icons here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
