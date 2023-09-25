import { createSlice } from "@reduxjs/toolkit";

const initialState = { connectSwitch: "", show: false, btnname: "" };

const confirmmodal = createSlice({
  name: "confirmmodalState",
  initialState,
  reducers: {
    show(state) {
      state.show = true;
      return state;
    },
    hide(state) {
      state.show = false;
      return state;
    },
    switch(state, action) {
      state.connectSwitch = action.payload;
      if (action.payload == "clearInput") {
        state.btnname = "清空";
      }
      return state;
    },
    reset(state, action) {
      if (action.payload == "reset") {
        state.connectSwitch = "";
      }
      return state;
    },
  },
});

export const confirmmodalActions = confirmmodal.actions;
export default confirmmodal.reducer;
