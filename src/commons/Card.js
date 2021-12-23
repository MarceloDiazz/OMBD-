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

/*  return (
    <div className="group relative">
      <div className="w-full  min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none">
        <img
          src={movies.Poster}
          alt={movies.Title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span />
            {movies.Title}
          </h3>
        </div>
      </div>
    </div>
  ); */