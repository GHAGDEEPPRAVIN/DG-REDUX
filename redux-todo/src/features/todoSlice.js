import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{
    title: "learn Redux",
    status:true
  }]
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(
        {
            title : action.payload,
            status: true
        }
      );
    }
  }
});

// store
export default todoSlice.reducer;

// dispatched
export const { add } = todoSlice.actions;