import { configureStore } from "@reduxjs/toolkit";
import backdropReducer from "./backdrop_slice";
import confirmmodalReducer from "./confirmmodal_slice";
import ccbtnReducer from "./ccbtn_slice";
import uiReducer from "./ui_slice";
import arrivallistdataReducer from "./arrivallistdata_slice";

const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    confirmmodal: confirmmodalReducer,
    ccbtn: ccbtnReducer,
    ui: uiReducer,
    arrivallistdata: arrivallistdataReducer,
  },
});

export default store;
