import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
const detailModalSlice = createSlice({
  name: "detailModal",
  initialState: initialState,
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

const { actions, reducer } = detailModalSlice;

export const { toggleIsOpen } = actions;

export default detailModalSlice.reducer;
