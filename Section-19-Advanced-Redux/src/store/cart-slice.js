import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

const initialCartSlice = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'counter',
  initialState: initialCartSlice,
  reducers: {
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
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      }),
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-advanced-redux-6e18f-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) },
      );

      if (!response.ok) {
        throw new Error('Sending Cart Data Failed!');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        }),
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        }),
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
