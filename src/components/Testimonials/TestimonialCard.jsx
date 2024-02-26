// import React from "react";

// const TestimonialCard = ({ name, comment, rating, bgColor }) => {
//   const cardStyle = {
//     backgroundColor: bgColor,
//     transition: "background-color 1s ease-in",
//     marginLeft: "10rem"

//   };

//   return (
//     <div classNameName="shadow-md rounded-lg p-10 w-1/2" style={cardStyle}>
//       <div classNameName="flex items-center justify-center mb-4">
//         <div classNameName="flex-shrink-0 mr-3">
//           {/* <img
//             classNameName="w-12 h-12 rounded-full"
//             src="https://via.placeholder.com/150"
//             alt="Testimonial Avatar"
//           /> */}
//         </div>
//         <div>
//           <div classNameName="text-lg font-semibold">{name}</div>
//           <div classNameName="text-gray-500">{rating} stars</div>
//         </div>
//       </div>
//       <div classNameName="text-gray-700 flex items-center justify-center">{comment}</div>
//     </div>
//   );
// };

// export default TestimonialCard;


import React from 'react';

const TestimonialCard = ({ text, author, company}) => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
            <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
            </svg> 
            <blockquote>
                <p className="text-2xl font-medium text-gray-900 dark:text-white">{text}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
               
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">{author}</div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{company}</div>
                </div>
               
            </figcaption>
        </figure>
    </div>
  </section>
  </>
  );
};

export default TestimonialCard;
