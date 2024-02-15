import React, { forwardRef, useState, useEffect } from 'react';
import about from '../../assets/aboutsUs.jpg';
import aboutAlt from '../../assets/aboutAlt.jpg'; 
import './AboutUs.css';

const AboutUs = forwardRef((props, ref) => {
  const [isFlipped, setIsFlipped] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(prevState => !prevState);
    }, 2000); // Flip every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div 
      className="about-block flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:py-16"
      ref={ref}
          >
      <div className="about-content md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to KK Industries, where precision meets purpose in fabrication and construction solutions. With expertise honed over many years, we're not just building structures; we're crafting communities. From intricate fabrication projects to the construction of essential labor camps, we're committed to excellence at every turn. Trust us to bring your vision to life with quality, efficiency, and a dedication to making a lasting impact. At KK Industries, we're not just building; we're shaping futures. Join us in building a better tomorrow, one project at a time.
        </p>
      </div>
      <div className={`about-image md:w-1/2 relative ${isFlipped ? 'hover-flip' : ''}`}>
        <img src={about} alt="About Us" className={`w-full rounded-lg shadow-lg ${isFlipped ? 'block' : 'hidden'}`} />
        <img src={aboutAlt} alt="About Us Alternate" className={`w-full rounded-lg shadow-lg ${isFlipped ? 'hidden' : 'block'}`} />
      </div>
    </div>
  );
});

export default AboutUs;
