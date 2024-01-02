import { createSlice } from '@reduxjs/toolkit'

const backdropState = createSlice({
  name: 'backdrop',
  initialState: false,
  reducers: {
    show(state) {
      // ==state非物件的話必須有回傳值
      // ==state = false
      return (state = true)
    },
    hide(state) {
      // ==state非物件的話必須有回傳值
      // ==state = false
      return (state = false)
    }
  }
})

export const backdropActions = backdropState.actions
export default backdropState.reducer
