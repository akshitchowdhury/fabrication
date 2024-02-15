import React, { forwardRef } from 'react';

import service_image from '../../assets/f0.jpg'

import './ServicePage.css'

const ServicePage = forwardRef((props, ref) => {

  return (
    <div className= 'mains-service' ref={ref} >
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="float-left mr-8 mb-4">
            <img src={service_image} alt="Service Image" className="rounded-md shadow-md" />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra quam vel quam
            commodo, in vestibulum nunc fermentum. Proin sit amet nunc efficitur, ullamcorper
            nunc nec, ullamcorper elit. Aenean vel est ac ante varius malesuada.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  );

})
  
export default ServicePage;
