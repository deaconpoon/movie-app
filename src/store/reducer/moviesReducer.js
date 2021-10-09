import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import MoviesList from "../../utils/sample.json";

const moviesList = JSON.parse(JSON.stringify(MoviesList)).entries;

const moviesListWithID = moviesList.map((movie) => {
  const id = uuidv4();
  return { ...movie, ["id"]: id };
});

const initialState = {
  moviesList: moviesListWithID,
  filteredMoviesList: null,
  selectedMovie: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    sort: (state, { payload }) => {
      const filteredMoviesList = state.moviesList.filter(
        ({ programType }) => programType === payload
      );
      state.filteredMoviesList = filteredMoviesList;
    },
    /*     select: (state, action) =>
      (state.selectedMovie = state.moviesList.filter(
        ({ id }) => id === action.payload
      )), */
    select: (state, { payload }) => {
      const selectedMovie = state.moviesList.filter(({ id }) => id === payload);
      state.selectedMovie = selectedMovie;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const { sort, select } = actions;

export default moviesSlice.reducer;
