import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash/uniqueId";

const PREFIX = "notification";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCartVisible: false,
    notifications: [],
  },
  reducers: {
    toggleCartVisiblity(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showErrorNotification(state, action) {
      const { title, message, duration } = action.payload;
      const id = uniqueId(PREFIX);
      state.notifications.push({
        id,
        title,
        message,
        duration,
        status: "error",
      });
    },
    showSuccessNotification(state, action) {
      const { title, message, duration } = action.payload;
      const id = uniqueId(PREFIX);
      state.notifications.push({
        id,
        title,
        message,
        duration,
        status: "success",
      });
    },
    hideNotification(state, action) {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload.id
      );
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
