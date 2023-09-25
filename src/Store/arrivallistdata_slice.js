import { createSlice } from "@reduxjs/toolkit";

const initialState = { update: true, arrivallistdata: [] };

const arrivallistdataState = createSlice({
  name: "arrivallistdata",
  initialState,
  reducers: {
    converitem(state, action) {
      state.arrivallistdata = action.payload;
      // return state;
    },
    turnfalse(state) {
      state.update = false;
      // return state;
    },
    turntrue(state) {
      state.update = true;
      // return state;
    },
  },
});

export const arrivallistdataActions = arrivallistdataState.actions;
export default arrivallistdataState.reducer;
