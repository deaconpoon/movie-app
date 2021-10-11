import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducer/rootReducer";
import moviesReducer from "./reducer/moviesReducer";
import funFactReducer from "./reducer/funFactReducer";
import detailModalReducer from "./reducer/detailModalReducer";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    funFact: funFactReducer,
    detailModal: detailModalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
