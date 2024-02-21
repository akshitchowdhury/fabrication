import React, { forwardRef, useState, useEffect } from 'react';
import about from '../../assets/aboutsUs.jpg';
import about2 from '../../assets/f8.jpg';
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
    <>
    {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">About Us</h2>
    <div className="about-block flex flex-col md:flex-row items-center justify-center heading text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto" ref={ref}>
      <div className="about-content md:w-full mb-8 md:mb-0">
        <div className='paraText max-w-4xl mx-auto px-4'>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Welcome to KK Industries, where precision meets purpose in fabrication and construction solutions. With expertise honed over many years, we're not just building structures; we're crafting communities. From intricate fabrication projects to the construction of essential labor camps, we're committed to excellence at every turn. Trust us to bring your vision to life with quality, efficiency, and a dedication to making a lasting impact. At KK Industries, we're not just building; we're shaping futures. Join us in building a better tomorrow, one project at a time.
          </p>
        </div>
        <img className='about2 mx-auto md:mx-0' src={about2} alt="About Us" />
      </div>
      <div className="about-image md:w-full relative">
        <img src={about} alt="About Us" className="w-full rounded-lg shadow-lg block md:hidden" />
        <img src={aboutAlt} alt="About Us Alternate" className="w-full rounded-lg shadow-lg hidden md:block" />
      </div>
    </div> */}
    
    <h1 className="heading text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">About Us</h1>
    <div className='about-block' ref={ref}>
      
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="about-content w-full md:w-1/2">
            <div className="float-left mr-8 mb-4">
              <img src={about2} alt="Service Image" className=" rounded-md shadow-md" />
            </div>
            <p className="text-lg leading-relaxed">
            Welcome to KK Industries, where precision meets purpose in fabrication and construction solutions. With expertise honed over many years, we're not just building structures; we're crafting communities. From intricate fabrication projects to the construction of essential labor camps, we're committed to excellence at every turn. Trust us to bring your vision to life with quality, efficiency, and a dedication to making a lasting impact. At KK Industries, we're not just building; we're shaping futures. Join us in building a better tomorrow, one project at a time.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-auto" >
  <div className="about_image flex flex-wrap -mx-4">
    <div className="image_block md:w-full relative">
      {/* <img src={aboutAlt} alt="About Us Alternate" className="w-full rounded-lg shadow-lg md:block max-w-full h-auto" /> */}
    </div>
  </div>
</div>

              
            </div>
          </div>
        </div>
      
  



  </>
  
  );
});

export default AboutUs;
