import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducer/rootReducer";
import moviesReducer from "./reducer/moviesReducer";
import funFactReducer from "./reducer/funFactReducer";

/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); */

/* function loggerMiddleware() {
  return function (next) {
    return function (action) {
      console.log(action);
      next(action);
    };
  };
} */

const store = configureStore({
  reducer: { movies: moviesReducer, funFact: funFactReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
