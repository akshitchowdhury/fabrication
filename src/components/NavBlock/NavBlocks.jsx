import React from 'react'
import BgNav from '../BgNav'
import './NavBlocks.css'
import Gallery from '../Gallery/Gallery'
import AboutUs from '../About Us/AboutUs'
import ContactComponent from '../Contact/ContactComponent'



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

    <div className='contact'>
        <ContactComponent/>
    </div>
    

  
    </>
  )
}

export default NavBlocks