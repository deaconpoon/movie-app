import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://numbersapi.com/";

/* export const getFunFact = (year) =>
  createAsyncThunk("movies/getFunFact", async () => {
    return axios.get(`${baseURL + year}/year`).then((res) => res.data);
  }); */

export const getFunFact = createAsyncThunk(
  "funFact/getFunFact",
  async (year) => {
    const funFact = fetch(`${baseURL + year}/year`).then((res) => {
      if (!res.ok) throw Error(res.statusText);
      return res.data;
    });

    return funFact;
  }
);

const funFactSlice = createSlice({
  name: "funFact",
  initialState: {
    funFact: "",
    status: null,
  },
  extraReducers: {
    [getFunFact.pending]: (state, action) => {
      state.status = "loading";
    },
    [getFunFact.fulfilled]: (state, { payload }) => {
      state.funFact = payload;
      state.status = "success";
    },
    [getFunFact.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
const { actions, reducer } = funFactSlice;

export default funFactSlice.reducer;
