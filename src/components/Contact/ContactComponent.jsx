import React, { forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import 'leaflet/dist/leaflet.css';
import MapLeaflet from './MapLeaflet';
import './Contact.css'

const ContactComponent = forwardRef((props,ref) => {
  return ( <>
  <div ref={ref} className='connect-container'>
  <h2 className="connect w-full lg:w-3/4 px-4 lg:p-4 lg:h-full rounded-lg  text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">Connect With Us</h2>

    <div className="flex flex-col lg:flex-row sm:flex-col">
    <div className="form w-full md:w-1/2 lg:w-1/2 px-4 lg:p-4 lg:h-full rounded-lg shadow-2xl bg-white">
  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block font-semibold mb-1">Name</label>
      <input type="text" id="name" name="name" className="enter-name w-full px-4 py-2 border rounded-md" placeholder="Enter your name" />
    </div>
    <div>
      <label htmlFor="email" className="block font-semibold mb-1">Email</label>
      <input type="email" id="email" name="email" className="enter-email w-full px-4 py-2 border rounded-md" placeholder="Enter your email" />
    </div>
    <div>
      <label htmlFor="message" className="block font-semibold mb-1">Message</label>
      <textarea id="message" name="message" rows="4" className="enter-message w-full px-4 py-2 border rounded-md" placeholder="Enter your message"></textarea>
    </div>
    <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Submit</button>
  </form>
</div>

      

     <MapLeaflet className="map-box"/>
    

    </div>
</div>
</>
  );
});

export default ContactComponent;
