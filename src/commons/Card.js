import React from "react";
const Card = ({ movies }) => {
  return (
    <div className="relative mt-5">
      <div className="w-full  min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden hover:opacity-75  lg:aspect-none">
        <img
          src={movies.Poster}
          alt={movies.Title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
    </div>
  );
};

export default Card;
