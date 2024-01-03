import { faLariSign } from '@fortawesome/free-solid-svg-icons'
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  update: false,
  arrivallistdata: [],
  editing: false,
  editItam: {}
}

const arrivallistdataState = createSlice({
  name: 'arrivallistdata',
  initialState,
  reducers: {
    converitem(state, action) {
      state.arrivallistdata = action.payload
    },
    updateListdata(st, ac) {
      // ?怎麼樣改變這裡的物件內容比較正確，有比JSON方法更好的嗎
      const state = JSON.parse(JSON.stringify(current(st.arrivallistdata)))
      function queryDate(date, state) {
        const n = state.findIndex((d, i) => {
          return Object.keys(d)[0] === date
        })
        return n
      }
      function addnew(n, state) {
        const newnewone = {
          [ac.payload.newinputDate]: [
            {
              [ac.payload.now]: ac.payload.data
            }
          ]
        }
        // *如果本來沒有該日期的項目，則新增一筆
        if (n === -1) {
          state.push(newnewone)
        } else {
          state[n][ac.payload.newinputDate].push({
            [ac.payload.now]: ac.payload.data
          })
        }
        return state
      }

      const rightDate = queryDate(ac.payload.newinputDate, state)
      const newstate = addnew(rightDate, state)
      st.arrivallistdata = newstate
    },
    deleteListdata(st, ac) {
      const state = JSON.parse(JSON.stringify(current(st.arrivallistdata)))

      function deletedata(state) {
        // *找到對的日期
        const n = state.findIndex((d, i) => {
          return Object.keys(d)[0] === ac.payload.newinputDate
        })
        // *找到對的項目
        const n2 = state[n][ac.payload.newinputDate].findIndex((d, i) => {
          return Object.keys(d)[0] === ac.payload.datakeys
        })
        // *刪除項目
        state[n][ac.payload.newinputDate].splice(n2, 1)
        return state
      }
      const newstate = deletedata(state)
      st.arrivallistdata = newstate
    },
    editListdata(st, ac) {
      st.editing = true
      switch (ac.payload.type) {
        case 'data':
          st.editItam = ac.payload.value
          break
        case 'checkboxes':
          st.editItam.checkvaluearr = ac.payload.value
          break
        // case 'customerId':
        //   st.editItam = ac.payload.value
        //   break
        case 'goods':
          st.editItam.newcontent[ac.payload.value.order] = ac.payload.value.data
          break
        case 'deletelistitem':
          st.editItam.newcontent.splice(ac.payload.value, 1)
          break
      }
    },
    edittrue(st) {
      st.editing = true
    },
    editfalse(st) {
      st.editing = false
    }
  }
})

export const arrivallistdataActions = arrivallistdataState.actions
export default arrivallistdataState.reducer
