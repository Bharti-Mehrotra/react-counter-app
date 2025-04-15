// src/colorClassSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'colorClass',
  initialState: { value: "navbar navbar-light bg-light" },
  reducers: {
    toggleColor: (state) => {
      state.value = state.value === "navbar navbar-light bg-light" ? "navbar navbar-dark bg-dark" : "navbar navbar-light bg-light";
      return state;
    },
  },
});

export const { toggleColor } = counterSlice.actions;
export default counterSlice.reducer;
