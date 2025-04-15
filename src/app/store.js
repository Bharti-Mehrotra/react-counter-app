// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import colorClassReducer from '../features/changeColorSlice';
import counterReducer from '../features/counterSlice';
export const store = configureStore({
  reducer: {
    colorClassReducer,
    counterReducer
  },
});
