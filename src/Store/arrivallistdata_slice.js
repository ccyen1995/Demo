import { createSlice } from '@reduxjs/toolkit'

const initialState = { update: true, arrivallistdata: [] }

const arrivallistdataState = createSlice({
  name: 'arrivallistdata',
  initialState,
  reducers: {
    converitem(state, action) {
      state.arrivallistdata = action.payload
    },
    turnfalse(state) {
      state.update = false
    },
    turntrue(state) {
      state.update = true
    }
  }
})

export const arrivallistdataActions = arrivallistdataState.actions
export default arrivallistdataState.reducer

// if (state.update == true) {
//   state.arrivallistdata = action.payload;
// }
