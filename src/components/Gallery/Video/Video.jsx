import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Video.css'
const Video = ({ urls }) => {
  const sliderRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isVideoPlaying) {
        sliderRef.current.slickNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isVideoPlaying]);

  const handlePlay = () => {
    setIsVideoPlaying(true);
  };

  const handlePause = () => {
    setIsVideoPlaying(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay as we're handling it manually
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {urls.map((url, index) => (
          <div key={index} className="player-container">
            <ReactPlayer
            
              url={url}
              width="50%"  // Adjusted width
              height="300px"  // Adjusted height
              controls
              onPlay={handlePlay}
              onPause={handlePause}
              onEnded={handlePause}
              style={{ marginLeft: '30%', boxShadow: '3px 3px 4px 4px rgb(117, 117, 185)' }}

            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Video;
