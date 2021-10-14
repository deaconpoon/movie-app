import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
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
