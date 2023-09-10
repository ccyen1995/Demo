import { createSlice } from "@reduxjs/toolkit";

const backdropState = createSlice({
  name: "backdrop",
  initialState: false,
  reducers: {
    show(state) {
      return (state = true);
    },
    hide(state) {
      return (state = false);
    },
  },
});

export const backdropActions = backdropState.actions;
export default backdropState.reducer;
