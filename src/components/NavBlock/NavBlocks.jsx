import React from 'react'
import BgNav from '../BgNav'
import './NavBlocks.css'
import Gallery from '../Gallery/Gallery'
import AboutUs from '../About Us/AboutUs'

const NavBlocks = () => {
  return (
    <>
    <div className='navBlock'>
        <BgNav/>
    </div>

    <div className='aboutUs'>
    <AboutUs/>
        
    </div>
    
    <div className='galleria'>
        <Gallery/>
    </div>

    

    
  
    </>
  )
}

export default NavBlocks