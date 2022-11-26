import { createSlice } from '@reduxjs/toolkit';

const initialUI = { cartIsVisible: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUI,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
