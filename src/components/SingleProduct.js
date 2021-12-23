/* CARD la utilice para mostrar la descripcion de la pelicula seleccionada */

import { React, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getMovieId } from "../state/movies";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieId(id)).then((res) => res.data);
  }, [dispatch, id]);

  const movieId = useSelector((state) => state.movies?.id);

  return (
    <div className="w-5/6 p-20 m-20">
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center md:flex-row">
        <div className="w-full md:w-2/5 h-1/2">
          <img
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            src={movieId?.Poster}
            alt={movieId?.Title}
          />
        </div>
        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
          <p className="text-center text-xl text-gray-700 font-bold">
            {movieId?.Title}
          </p>
          <p className="text-center text-gray-400 font-normal">{movieId?.Genre}</p>
          <p className="p-6 text-center leading-relaxed text-gray-500 font-normal">
            {movieId?.Plot}
          </p>
          <p className="ml-6 text-base text-gray-700 font-normal">
            Director: {movieId?.Director}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
