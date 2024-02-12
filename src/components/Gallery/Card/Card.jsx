import React from 'react'
import f0 from '../../../assets/f0.jpg'
// import f1 from '../../assets/f1.jpg'
// import f2 from '../../assets/f2.jpg'
const Card = () => {
  return (
    <div className='card'>
     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full" src={f0} alt="Placeholder" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Card Title</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
    </div>
  </div>
  </div>
  )
}

export default Card