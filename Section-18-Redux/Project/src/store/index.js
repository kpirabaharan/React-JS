import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import counterReducer from './counter';

const store = configureStore({
  // For mulitple reducers
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
