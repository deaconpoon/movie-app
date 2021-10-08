import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import moviesReducer from "./reducer/moviesReducer";

/* const composeEnhancer = compose(composeWithDevTools, applyMiddleware(thunk)); */

const store = createStore(
  moviesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
/* const store = createStore(moviesReducer); */

export default store;
