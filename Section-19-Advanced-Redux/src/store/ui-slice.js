import { createSlice } from '@reduxjs/toolkit';

const initialUI = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUI,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
