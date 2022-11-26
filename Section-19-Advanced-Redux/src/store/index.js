import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './cart-slice.js';
import uiSliceReducer from './ui-slice.js';

const store = configureStore({
  reducer: { counter: cartSliceReducer, ui: uiSliceReducer },
});

export default store;
