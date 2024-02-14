import React, { useEffect, useState } from 'react';
import './BgText.css';

const BgText = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className='header'>
    <div className={`fade-in-left ${fadeIn ? 'visible' : ''}`}>
      <h3>Welcome to KK Fabrication Industries</h3>
    </div>
    </div>
  );
};

export default BgText;
