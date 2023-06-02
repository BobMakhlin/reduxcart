import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
