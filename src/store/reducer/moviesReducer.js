import { createSlice } from "@reduxjs/toolkit";
import MoviesList from "../../utils/sample.json";

const initialState = {
  moviesList: JSON.parse(JSON.stringify(MoviesList)).entries,
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
    select: (state, { payload }) => (state.selectedMovie = payload),
  },
});

const { actions, reducer } = moviesSlice;

export const { sort, select } = actions;

export default moviesSlice.reducer;
