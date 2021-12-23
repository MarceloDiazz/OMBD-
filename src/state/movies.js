import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovies = createAsyncThunk("getMovies", (movies) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=959ee6fb&s=${movies}`)
    .then((res) => res.data);
});

export const getMovieId = createAsyncThunk("movieId", (id) => {
  return axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=d87da86a`)
    .then((res) => res.data);
});

const reducerMovies = createReducer(
  {},
  {
    [getMovies.fulfilled]: (state, action) => {
      state.allMovies = action.payload;
    },
    [getMovieId.fulfilled]: (state, action) => {
      state.id = action.payload;
    },
  }
);

export default reducerMovies;
