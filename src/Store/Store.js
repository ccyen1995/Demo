import { configureStore } from "@reduxjs/toolkit";
import backdropReducer from "./backdrop_slis";
import confirmmodalReducer from "./confirmmodal_slis";

const store = configureStore({
  reducer: { backdrop: backdropReducer, confirmmodal: confirmmodalReducer },
});

export default store;
