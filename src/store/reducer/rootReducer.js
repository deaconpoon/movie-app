import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer";
import funFactReducer from "./funFactReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  funFact: funFactReducer,
});
export default rootReducer;
