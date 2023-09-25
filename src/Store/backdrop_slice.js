import { createSlice } from "@reduxjs/toolkit";
// const initialState = { statte: false };
const backdropState = createSlice({
  name: "backdrop",
  initialState: false,
  reducers: {
    show(state) {
      // state.statte = true;
      return (state = true);
    },
    hide(state) {
      // state.statte = false;
      return (state = false);
    },
  },
});

export const backdropActions = backdropState.actions;
export default backdropState.reducer;
