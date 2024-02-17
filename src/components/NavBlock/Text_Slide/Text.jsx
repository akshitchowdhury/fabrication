import React, { useState, useEffect } from 'react';
import './Text.css'; // Import your CSS file

const Slideshow = ({ texts, styles, fontStyles }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNext(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowNext(false);
      }, 1000); // Wait for the fade-out animation to finish
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="slideshow-container w-full flex justify-center items-center">
  <h2 className={`fade-in-from-left ${showNext ? 'fade-out' : ''}`} style={{ color: styles[currentTextIndex], fontStyle: fontStyles[currentTextIndex] }}>
    {texts[currentTextIndex]}
  </h2>
</div>

  );
};

const Text = () => {
  const texts = [
    "Building dreams, one stitch at a time.",
    "Crafting communities, stitching futures.",
    "Weaving comfort, building resilience.",
    "Where fabric meets foundation, communities thrive.",
    "From fabric to fruition, empowering lives.",
    "Stitching together hope, one project at a time."
  ];
  const styles = [
    "white", // orange
    "gold", // blue
    "white", // blue
    "gold", // blue
    "white", // blue
    "#F74007", // blue
    
  ];


 


  const fontStyles = [
  "'URW Chancery L', cursive",
  "'Montserrat', sans-serif",
  "'Lato', sans-serif",
  "'Open Sans', sans-serif",
  "'Playfair Display', serif",
  "'Merriweather', serif"
];

  return (
    <div className='text-box'>
      <h1>
        <Slideshow texts={texts} styles={styles} fontStyles={fontStyles} />
      </h1>
    </div>
  );
};

export default Text;
