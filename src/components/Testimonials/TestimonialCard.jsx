import React from 'react';

const TestimonialCard = ({ text, author, company }) => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full  flex-wrap overflow-x-scroll">
  <div className="max-w-screen-md mx-auto px-4 py-8 lg:py-16 lg:px-6 flex-wrap">
    <div className="max-w-md mx-auto flex-wrap">
      <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
      </svg> 
      
      
        <p className="text-2xl font-medium text-gray-900 dark:text-white w-full mx-8  flex-wrap">{text}</p>
      
      
      <figcaption className="flex flex-col items-center justify-center mt-6 space-y-3">
        <div className="flex flex-col items-center space-y-1">
          <div className="font-medium text-gray-900 dark:text-white">{author}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">{company}</div>
        </div>
      </figcaption>
    </div>
  </div>
</section>






  );
};

export default TestimonialCard;
