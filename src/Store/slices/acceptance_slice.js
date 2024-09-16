import { createSlice, current } from '@reduxjs/toolkit'

const initialState = { items: [], listInfo: {}, show: false }
const acceptanceListState = createSlice({
  name: 'acceptanceList',
  initialState,
  reducers: {
    importData(st, ac) {
      const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
        ac.payload
      st.items = newcontent
      st.listInfo = { checkvaluearr, customerId, newinputDate }
    },
    show(st, ac) {
      st.show = true
    },
    hide(st, ac) {
      st.show = false
    }
  }
})

export const acceptanceListActions = acceptanceListState.actions
export default acceptanceListState.reducer
