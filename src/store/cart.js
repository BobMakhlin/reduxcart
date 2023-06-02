import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartVisible: true },
  reducers: {
    toggleCartVisiblity(state) {
      state.isCartVisible = !state.isCartVisible;
    }
  },
});

export const actions = cartSlice.actions;
export const reducer = cartSlice.reducer;
