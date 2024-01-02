import { configureStore } from '@reduxjs/toolkit'
import backdropReducer from './slices/backdrop_slice'
import confirmmodalReducer from './slices/confirmmodal_slice'
import uiReducer from './slices/ui_slice'
import arrivallistdataReducer from './slices/arrivallistdata_slice'

const store = configureStore({
  reducer: {
    backdrop: backdropReducer,
    confirmmodal: confirmmodalReducer,
    ui: uiReducer,
    arrivallistdata: arrivallistdataReducer
  }
})

export default store
