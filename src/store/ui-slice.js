import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartVisible: false },
  reducers: {
    toggleCartVisiblity(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
