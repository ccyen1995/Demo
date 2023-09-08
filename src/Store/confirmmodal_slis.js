import { createSlice } from "@reduxjs/toolkit";

const confirmmodal = createSlice({
  name: "confirmmodalState",
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

export const confirmmodalActions = confirmmodal.actions;
export default confirmmodal.reducer;
