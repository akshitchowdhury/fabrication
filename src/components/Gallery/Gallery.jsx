import React from 'react'


import Card from './Card/Card'

const Gallery = () => {
  return (
    <div className='main-gallery'>
    <h1>Our Gallery</h1>
    <br />
    <div className='flex flex-wrap justify-center'>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default Gallery