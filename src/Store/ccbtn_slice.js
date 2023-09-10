import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const ccbtnState = createSlice({
  name: "ccbtn",
  initialState,
  reducers: {},
});

export const ccbtnActions = ccbtnState.actions;
export default ccbtnState.reducer;
