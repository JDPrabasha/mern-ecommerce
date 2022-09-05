import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(state.items);
      state.items.push(action.payload);
      console.log(state.items);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
