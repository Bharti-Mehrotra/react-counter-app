import { createSlice, nanoid } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        addCounter: {
            reducer: (state, action) => {
              state.push(action.payload);
            },
            prepare: () => ({
              payload: {
                id: nanoid(),
                value: 0,
              },
            }),
          },
        removeCounter: (state, action) => {
            return state.filter(counter => counter.id !== action.payload);
          },
        increment:  (state, action) => {
            const counter = state.find(c => c.id === action.payload);
            if (counter) counter.value += 1;
          },
        decrement:  (state, action) => {
            const counter = state.find(c => c.id === action.payload);
            if (counter) counter.value -= 1;
          },
          reset: (state, action) => {
            const counter = state.find(c => c.id === action.payload);
            if (counter) counter.value = 0;
          },
    }
});

export const {addCounter,
    removeCounter,
    increment,
    decrement,
    reset,
} = counterSlice.actions;
export default counterSlice.reducer; 