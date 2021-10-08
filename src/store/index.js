import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
