import React, { forwardRef } from 'react';

import service_image from '../../assets/gallery/kk12.jpg'
import service_image1 from '../../assets/gallery/kk13.jpg'
import service_image2 from '../../assets/gallery/kk14.jpg'
import service_image3 from '../../assets/gallery/kk16.jpg'
import serviceLogo from '../../assets/serviceLogo.jpg'

import './ServicePage.css'

const ServicePage = forwardRef((props, ref) => {

  return (
    <div className= 'mains-service' ref={ref} >
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap">
        <div className="C1 w-full md:w-1/2">
          <div className="float-left mr-8 mb-4">
            <img src={service_image} alt="Service Image" className="I1 rounded-md shadow-md" />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra quam vel quam
            commodo, in vestibulum nunc fermentum. Proin sit amet nunc efficitur, ullamcorper
            nunc nec, ullamcorper elit. Aenean vel est ac ante varius malesuada.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="C2 flex flex-wrap -mx-4">
            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="c1 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image3} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="c2 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image1} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>

            <div className='serviceLogo'>
              <img src={serviceLogo} alt="serviceLogo" />
            </div>

            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="c3 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image2} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 px-4 mb-8">
              <div className="c4 bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service_image} alt="Service Image" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Service Title 4</h3>
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