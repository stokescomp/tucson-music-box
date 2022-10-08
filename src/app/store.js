import { configureStore } from '@reduxjs/toolkit';

import basketReducer from '../slices/basketSlice';
import userReducer from '../slices/userSlice';
import productsReducer from '../slices/productsSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
    products: productsReducer,
  },
});
