import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const initialAuthState = {
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // Default action parameter is payload
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// configureStore is a better way to deal with multiple reducers.
// createStore is deprecated anyways
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, // For mulitple reducers
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
