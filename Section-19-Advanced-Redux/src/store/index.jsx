import { configureStore } from '@reduxjs/toolkit';

import cartSliceReducer from './cart-slice';
import uiSliceReducer from './ui-slice';

const store = configureStore({
  reducer: { cart: cartSliceReducer, ui: uiSliceReducer },
});

export default store;
