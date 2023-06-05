import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart";
import { reducer as uiReducer } from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
