import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  todos: [],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
  },
});

export const { increment, decrement, addTodo } = counterSlice.actions;

export default counterSlice.reducer;
