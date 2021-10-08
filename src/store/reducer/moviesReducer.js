import { createSlice } from "@reduxjs/toolkit";
import MoviesList from "../../utils/sample.json";

const moviesSlice = createSlice({
  slice: "movies",
  initialState: [],
  reducers: {
    sortProgramType(state, action) {
      /* return state.entries.map((entry) => entry.programType === action.payload); */
      return state;
    },
  },
});
const { actions, reducer } = moviesSlice;

export const { sortProgramType } = actions;

export default reducer;
