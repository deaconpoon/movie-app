import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://numbersapi.com/";

export const getFunFact = createAsyncThunk(
  "funFact/getFunFact",
  async (year) => {
    const funFact = axios.get(`${baseURL + year}/year`).then((res) => {
      return res.data;
    });
    return funFact;
  }
);

const funFactSlice = createSlice({
  name: "funFact",
  initialState: {
    funFact: null,
    status: null,
  },
  extraReducers: {
    [getFunFact.pending]: (state) => {
      state.status = "loading";
    },
    [getFunFact.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.funFact = payload;
    },
    [getFunFact.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default funFactSlice.reducer;
