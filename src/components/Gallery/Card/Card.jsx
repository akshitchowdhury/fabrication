import React from 'react';
import f0 from '../../../assets/real3.jpeg';
import f1 from '../../../assets/gallery/kk4.jpg';
import f2 from '../../../assets/real2.jpeg';
import f3 from '../../../assets/gallery/kk5.jpg';
import f4 from '../../../assets/real1.jpeg';
import f5 from '../../../assets/gallery/kk16.jpg';
import './Card.css'
const cardsData = [
  { image: f0, description: "Description for card 1", title: "Building the backbone of progress." },
  { image: f1, description: "Description for card 2", title: "Constructing havens for hard work."},
  { image: f2, description: "Description for card 3", title: "Foundations for a flourishing workforce."},
  { image: f3, description: "Description for card 4", title: "Creating spaces where labor finds home."},
  { image: f4, description: "Description for card 5", title: "Empowering workers through study shelters."},
  { image: f5, description: "Description for card 6", title: "Pioneering solutions for labor accommodation."},
  // Add similar entries for f1, f2, ..., f8
];

const Card = () => {
  return (
    <div className='card-grid'>
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl m-4 card-container" >
          <img className="w-full h-64 object-cover" src={card.image} alt={`Card ${index}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            {/* <p className="text-gray-700 text-base">{card.description}</p> */}
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
