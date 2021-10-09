import { createSlice } from "@reduxjs/toolkit";
import MoviesList from "../../utils/sample.json";

/* const initialState = JSON.parse(JSON.stringify(MoviesList)).entries; */
const initialState = {
  moviesList: JSON.parse(JSON.stringify(MoviesList)).entries,
  filteredMoviesList: {},
  selectedMovie: {},
};
const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    sortProgramType: (state, action) => {
      const filteredMoviesList = state.moviesList.filter(
        ({ programType }) => programType === action.payload
      );
      state.filteredMoviesList = filteredMoviesList;
    },
    /* return state.entries.filter(
        (entry) => entry.programType === action.payload
      ); */
    /*  state.filter(({ programType }) => programType === action.payload); */
    /* return state.filter(({ programType }) => programType === action.payload); */
  },
});

const { actions, reducer } = moviesSlice;

export const { sortProgramType } = actions;

export default moviesSlice.reducer;
