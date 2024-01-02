import { createSlice } from '@reduxjs/toolkit'
// import {someactions} from
const initialState = {
  connectSwitch: '',
  show: false,
  btnname: '',
  extra: ''
}

const confirmmodal = createSlice({
  name: 'confirmmodalState',
  initialState,
  reducers: {
    show(state) {
      state.show = true
    },
    hide(state) {
      state.show = false
    },
    switch(state, action) {
      state.connectSwitch = action.payload.switch
      if (state.connectSwitch === 'clearInput') {
        state.btnname = '清空輸入'
      }
      if (state.connectSwitch === 'deletelistitem') {
        state.btnname = '刪除資料'
        state.extra = action.payload.extra
      }
    }
  }
})

export const confirmmodalActions = confirmmodal.actions
export default confirmmodal.reducer
