import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import MoviesList from "../../utils/sample.json";

const moviesList = JSON.parse(JSON.stringify(MoviesList)).entries;

const moviesListWithID = moviesList.map((movie) => {
  const id = uuidv4();
  return { ...movie, ["id"]: id };
});

/* const baseURL = "http://numbersapi.com/"; */

/* export const getFunFact = (year) =>
  createAsyncThunk("movies/getFunFact", async () => {
    return axios.get(`${baseURL + year}/year`).then((res) => res.data);
  }); */

/* export const getFunFact = createAsyncThunk(
  "movies/getFunFact",
  async (year, thunkAPI) => {
    const funFact = await fetch(`${baseURL + year}/year`).then((res) =>
      res.json()
    );
    return funFact;
  }
);
 */
const initialState = {
  moviesList: moviesListWithID,
  filteredMoviesList: null,
  selectedMovie: null,
  selectedFunFact: null,
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
    select: (state, { payload }) => {
      const selectedMovie = state.moviesList.filter(({ id }) => id === payload);
      state.selectedMovie = selectedMovie;
    },
  },
});

const { actions, reducer } = moviesSlice;

export const { sort, select } = actions;

export default moviesSlice.reducer;
