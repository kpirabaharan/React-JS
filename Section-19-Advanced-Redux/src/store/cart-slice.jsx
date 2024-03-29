import { createSlice } from '@reduxjs/toolkit';
import { fetchCartData } from './cart-actions';

const initialCartSlice = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'counter',
  initialState: initialCartSlice,
  reducers: {
    // replaceCart(state, action) {
    //   state.totalQuantity = action.payload.totalQuantity;
    //   state.items = action.payload.items;
    // },
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          name: newItem.title,
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const oldItem = action.payload;
      const existingItem = state.items.find((item) => item.id === oldItem.id);
      if (existingItem === 1) {
        state.items = state.items.filter((item) => item.id !== oldItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalQuantity--;
    },
  },
  extraReducers: {
    [fetchCartData.fulfilled]: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
