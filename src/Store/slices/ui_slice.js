import { createSlice } from '@reduxjs/toolkit'

const initialState = { show: false, notification: null }

const uiState = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message
      }
      state.show = true
      return state
    },
    hide(state) {
      state.show = false
      return state
    }
  }
})

export const uiActions = uiState.actions

export default uiState.reducer
