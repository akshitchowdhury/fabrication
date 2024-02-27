import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';
import './TestimonialCarousel.css'
const TestimonialCarousel = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSliding && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isSliding]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay as we're handling it manually
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (_, next) => {
      setIsSliding(true);
    },
    afterChange: () => {
      setIsSliding(false);
    },
  };

  return (

    <>
    <div className='carousel-container'>
        <h2 className= "text-center md:text-4xl   text-3xl` maxWidth: '100%', maxHeight: '100%'">Testimonials</h2>
    <div className=" h-40">
    
      <div className="max-w-2xl h-40 mx-auto ">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-container">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
    </>

  );
};

export default TestimonialCarousel;
