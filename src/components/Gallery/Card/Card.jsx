import React from 'react';
import f0 from '../../../assets/f0.jpg';
import f1 from '../../../assets/f1.jpg';
import f2 from '../../../assets/f3.webp';
import f3 from '../../../assets/f4.avif';
import f4 from '../../../assets/fbg1.avif';
import f5 from '../../../assets/fbg2.jpg';
import './Card.css'
const cardsData = [
  { image: f0, description: "Description for card 1", title: "Image1" },
  { image: f1, description: "Description for card 2", title: "Image2" },
  { image: f2, description: "Description for card 3", title: "Image3" },
  { image: f3, description: "Description for card 4", title: "Image4" },
  { image: f4, description: "Description for card 5", title: "Image5" },
  { image: f5, description: "Description for card 6", title: "Image6" },
  // Add similar entries for f1, f2, ..., f8
];

const Card = () => {
  return (
    <div className='card-grid'>
      {cardsData.map((card, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 card-container">
          <img className="w-full h-64 object-cover" src={card.image} alt={`Card ${index}`} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{card.title}</div>
            <p className="text-gray-700 text-base">{card.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
