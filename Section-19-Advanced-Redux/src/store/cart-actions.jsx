import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk('cart/fetchData', async () => {
  console.log('Fetch');
  const response = await fetch(
    'https://react-advanced-redux-6e18f-default-rtdb.firebaseio.com/cart.json',
    { method: 'GET' },
  );

  if (!response.ok) {
    throw new Error('Fetch Response Failed!');
  }

  const data = await response.json();
  return data;
});

export const sendCartData = createAsyncThunk('cart/sendData', async (cart) => {
  console.log('PUT');
  const response = await fetch(
    'https://react-advanced-redux-6e18f-default-rtdb.firebaseio.com/cart.json',
    { method: 'PUT', body: JSON.stringify(cart) },
  );

  if (!response.ok) {
    throw new Error('Sending Cart Data Failed!');
  }
});
