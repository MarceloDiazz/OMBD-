import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducerMovies from "./movies";
import reducerRegistration from "./registration";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
  reducer: {
    registration: reducerRegistration,
    movies: reducerMovies,
  },
});

export default store;
