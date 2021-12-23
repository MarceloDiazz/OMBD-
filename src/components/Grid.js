import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../commons/Card";
const Grid = () => {
  const movies = useSelector((state) => state.movies?.allMovies);
  if (!movies) {
    return (
      <h1 className="color centrado has-background-danger">
        NO SE ENCONTRARON RESULTADOS :(
      </h1>
    );
  } else if (movies) {
    return (
      <div className="p-10">
        <div className="flex justify-center relative flex-wrap">
          {movies?.Search.map((mov, i) => {
            return (
              <div key={i} className="ml-10">
                <Link to={`/movies/${mov.imdbID}`}>
                  <Card movies={mov} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Grid;
