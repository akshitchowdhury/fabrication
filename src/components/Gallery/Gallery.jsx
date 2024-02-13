import React, { forwardRef } from 'react'


import Card from './Card/Card'
import './Gallery.css'
import Video from './Video/Video'

const urls = [
  "https://www.youtube.com/watch?v=NBJhnd08eOc",
  "https://www.youtube.com/watch?v=RHO2N5eHQy4",
  "https://www.youtube.com/watch?v=tR1mHx_HoYY"
];

const Gallery = forwardRef((props,ref) => {
  return (
    <div className='main-gallery' ref={ref}>
 <h2 className="heading text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">Our Gallery</h2>
   <br />
    <div className= 'flex flex-wrap justify-center'>
    <Card/>
    
    
    </div>
    <div className='video'>
    <Video urls={urls} />
    </div>
    </div>
    
  )
})

export default Gallery