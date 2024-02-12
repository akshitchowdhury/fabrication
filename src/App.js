import logo from './logo.svg';
import './App.css';

import BgNav from './components/BgNav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBlocks from './components/NavBlock/NavBlocks';
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/About Us/AboutUs';





function App() {
  return (
    <>
    <Router>
        
      {/* <Navbar />
      
      <SocialIcons/> */}
      <Routes>
        <Route path="/" element={<NavBlocks/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/about" element={<AboutUs/>} />
        {/* 
        <Route path="/services" element={<Services/>} />
        
        <Route path="/contact" element={<Contact/>} /> */}

        {/*         
        <Route path="/contact" component={Contact} /> */}

      </Routes>
        
  
    </Router>
  
    </>
  );
}

export default App;
