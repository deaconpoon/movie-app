import { createSlice } from "@reduxjs/toolkit";

const funFactSlice = createSlice({
  name: "funFact",
  initialState: 0,
  reducers: {
    getFunFact: (state) => (state += 1),
  },
});
const { actions, reducer } = funFactSlice;

export const { getFunFact } = actions;

export default funFactSlice.reducer;
