import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, isChanged: false },
  reducers: {
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

      state.totalQuantity++;
      state.isChanged = true;
    },
    decrementQuantity(state, action) {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.productId
      );
      if (!cartItem) {
        return;
      }

      if (cartItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.productId
        );
      } else {
        cartItem.quantity--;
        cartItem.total = cartItem.quantity * cartItem.price;
      }
      state.totalQuantity--;
      state.isChanged = true;
    },
    incrementQuantity(state, action) {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.productId
      );
      if (!cartItem) {
        return;
      }
      cartItem.quantity++;
      cartItem.total = cartItem.quantity * cartItem.price;
      
      state.totalQuantity++;
      state.isChanged = true;
    },
    initialize(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
