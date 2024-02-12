import React from 'react'


import Card from './Card/Card'
import './Gallery.css'
const Gallery = () => {
  return (
    <div className='main-gallery'>
    <h1>Our Gallery</h1>
    <br />
    <div className= 'flex flex-wrap justify-center'>
    <Card/>
    
    
    </div>
    </div>
  )
}

export default Gallery