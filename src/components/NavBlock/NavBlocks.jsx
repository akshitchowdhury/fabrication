import React from 'react'
import BgNav from '../BgNav'
import './NavBlocks.css'
import Gallery from '../Gallery/Gallery'
import AboutUs from '../About Us/AboutUs'
import ContactComponent from '../Contact/ContactComponent'

import Footer from '../Footer/Footer'



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
    

    <div className='footer'>
      <Footer/>
    </div>

  
    </>
  )
}

export default NavBlocks