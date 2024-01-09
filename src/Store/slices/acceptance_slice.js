import { createSlice, current } from '@reduxjs/toolkit'

const initialState = { items: [], listInfo: {} }
const acceptanceListState = createSlice({
  name: 'acceptanceList',
  initialState,
  reducers: {
    importData(st, ac) {
      console.log(ac.payload)
      const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
        ac.payload
      st.items = newcontent
      st.listInfo = { checkvaluearr, customerId, newinputDate }
    }
  }
})

export const acceptanceListActions = acceptanceListState.actions
export default acceptanceListState.reducer
