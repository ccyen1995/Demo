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
      return state
    },
    hide(state) {
      state.show = false
      return state
    },
    switch(state, action) {
      state.connectSwitch = action.payload.switch
      if (state.connectSwitch === 'clearInput') {
        state.btnname = '清空'
      }
      if (state.connectSwitch === 'deletelistitem') {
        state.btnname = '刪除資料'
        state.extra = action.payload.extra
      }
      return state
    },
    reset(state, action) {
      if (action.payload === 'reset') {
        state.connectSwitch = ''
      }
      return state
    }
  }
})

export const confirmmodalActions = confirmmodal.actions
export default confirmmodal.reducer
