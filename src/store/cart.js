import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartVisible: true, items: [] },
  reducers: {
    toggleCartVisiblity(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    addProduct(state, action) {
      const product = action.payload.product;
      const existingCartItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingCartItem) {
        existingCartItem.quantity++;
        existingCartItem.total =
          existingCartItem.quantity * existingCartItem.price;
      } else {
        const newCartItem = {
          id: product.id,
          title: product.title,
          quantity: 1,
          total: product.price,
          price: product.price,
        };
        state.items.push(newCartItem);
      }
    },
  },
});

export const actions = cartSlice.actions;
export const reducer = cartSlice.reducer;
