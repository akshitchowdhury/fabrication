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
      className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8 md:py-16"
      ref={ref}
    >
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consectetur libero. Nulla facilisi.
          Phasellus vitae elit nec mi pharetra bibendum. Donec auctor, orci nec dapibus pellentesque, turpis nisi
          viverra nisl, et eleifend odio mi a ex. Donec in arcu fermentum, rhoncus est et, lacinia ex. Nullam volutpat,
          urna et mattis convallis, nunc tortor vestibulum tortor, a lobortis libero arcu vel ex. Integer pharetra neque
          vel purus tincidunt, nec rhoncus urna malesuada.
        </p>
      </div>
      <div className={`md:w-1/2 relative ${isFlipped ? 'hover-flip' : ''}`}>
        <img src={about} alt="About Us" className={`w-full rounded-lg shadow-lg ${isFlipped ? 'block' : 'hidden'}`} />
        <img src={aboutAlt} alt="About Us Alternate" className={`w-full rounded-lg shadow-lg ${isFlipped ? 'hidden' : 'block'}`} />
      </div>
    </div>
  );
});

export default AboutUs;
