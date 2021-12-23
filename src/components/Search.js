import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useInput from "../hooks/useInput";
import { getMovies } from "../state/movies";

const Search = () => {
  const history = useHistory();
  const search = useInput("");
  const dispatch = useDispatch();

  const HandleMovies = (e) => {
    e.preventDefault();
    dispatch(getMovies(search.value)).then((data) => {
      if (data.type === "getMovies/fulfilled") {
        history.push("/movies");
      }
    });
  };

  return (
    <div className="main">
      <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div className="hero">
          <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
            <h1 className=" font-bold text-3xl text-white bg-black rounded-2xl p-2">
              Busca las mejores peliculas, tus peliculas favoritas!
            </h1>
          </div>

          <form onSubmit={HandleMovies} className="box pt-6">
            <div className="box-wrapper">
              <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none hover:bg-red-400">
                  <svg
                    className=" w-5 text-gray-600 h-5 cursor-pointer"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
                <input
                  {...search}
                  type="search"
                  placeholder="Buscar peliculas"
                  x-model="q"
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
                <div>
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-6 my-auto m-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
