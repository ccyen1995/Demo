import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const arrivallistdataState = createSlice({
  name: "arrivallistdata",
  initialState,
  reducers: {
    additem(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const arrivallistdataActions = arrivallistdataState.actions;
export default arrivallistdataState.reducer;
