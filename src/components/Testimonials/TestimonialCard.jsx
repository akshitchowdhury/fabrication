import React from "react";

const TestimonialCard = ({ name, comment, rating, bgColor }) => {
  const cardStyle = {
    backgroundColor: bgColor,
    transition: "background-color 1s ease-in",
    marginLeft: "10rem"
  };

  return (
    <div className="shadow-md rounded-lg p-10 w-1/2" style={cardStyle}>
      <div className="flex items-center justify-center mb-4">
        <div className="flex-shrink-0 mr-3">
          <img
            className="w-12 h-12 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Testimonial Avatar"
          />
        </div>
        <div>
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-gray-500">{rating} stars</div>
        </div>
      </div>
      <div className="text-gray-700 flex items-center justify-center">{comment}</div>
    </div>
  );
};

export default TestimonialCard;
