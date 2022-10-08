import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';
import isLoggedInReducer from '../slices/isLoggedIn';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    isLoggedIn: isLoggedInReducer,
  },
});
