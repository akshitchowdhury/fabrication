import React, { forwardRef, useState } from 'react';
import service_image from '../../assets/gallery/kk12.jpg'
import service_image1 from '../../assets/gallery/kk13.jpg'
import service_image2 from '../../assets/gallery/kk14.jpg'
import service_image3 from '../../assets/gallery/kk16.jpg'
import serviceLogo from '../../assets/serviceLogo.jpg'
import './ServicePage.css'

const ServicePage = forwardRef((props, ref) => {
  const [cardsVisible, setCardsVisible] = useState(false);

  const toggleCardsVisibility = () => {
    setCardsVisible(!cardsVisible);
  };

  return (
    <>
    <br/>
    <br/>
    <h1 className="Servie_heading heading text-3xl md:text-4xl font-bold mb-4 text-center md:text-left mx-auto">Our Services</h1>
    <div className='mains-service' ref={ref}>
      
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap">
          <div className="C1 w-full md:w-1/2">
            <div className="float-left mr-8 mb-4">
              <img src={service_image} alt="Service Image" className="I1 rounded-md shadow-md" />
            </div>
            <p className="text-lg">
            KK Industries, a trusted name in labor camp construction, brings years of expertise to every project. With a proven track record of delivering high-quality accommodation solutions, we prioritize safety, efficiency, and client satisfaction. Count on us to build robust living spaces that nurture productivity and well-being for your workforce
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="C2 flex flex-wrap -mx-4">
              <div className={`c1 w-full sm:w-1/2 px-4 mb-8 ${cardsVisible ? 'visible' : 'invisible'}`}>
                <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={service_image3} alt="Service Image" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Campus Crafters: Building Communities, One Camp at a Time</h3>
                    <p>Tailored camps for diverse workforce needs.</p>
                  </div>
                </div>
              </div>
              <div className={`c2 w-full sm:w-1/2 px-4 mb-8 ${cardsVisible ? 'visible' : 'invisible'}`}>
                <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={service_image1} alt="Service Image" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Forge and Shelter: Crafting Comfortable Living Spaces</h3>
                    <p>Efficient infrastructure solutions for labor accommodation.</p>
                  </div>
                </div>
              </div>
              <div className='serviceLogo'>
                <button className='logoButton' onClick={toggleCardsVisibility}>
                  <img src={serviceLogo} alt="serviceLogo" />
                </button>
              </div>
              <div className={`c3 w-full sm:w-1/2 px-4 mb-8 ${cardsVisible ? 'visible' : 'invisible'}`}>
                <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={service_image2} alt="Service Image" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Labor Haven: Tailored Camp Solutions for Every Need</h3>
                    <p>Comprehensive camp construction catering to worker welfare.</p>
                  </div>
                </div>
              </div>
              <div className={`c4 w-full sm:w-1/2 px-4 mb-8 ${cardsVisible ? 'visible' : 'invisible'}`}>
                <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={service_image} alt="Service Image" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Blueprints of Comfort: Customized Labor Camp Construction</h3>
                    <p>Customized living spaces fostering productivity and comfort.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
})

export default ServicePage;
