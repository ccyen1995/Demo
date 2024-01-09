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
    addListdata(st, ac) {
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
    updateeditListdata(st, ac) {
      const state = JSON.parse(JSON.stringify(current(st.arrivallistdata)))
      function updatedata(state) {
        // *找到相符的日期
        const n = state.findIndex((d, i) => {
          return Object.keys(d)[0] === ac.payload.newdata.newinputDate
        })

        // *如果沒有相符的日期，則新增一筆，並刪除一筆
        if (n === -1) {
          // *找到舊項目
          const n3 = state.findIndex((d, i) => {
            return Object.keys(d)[0] === ac.payload.selecteddate
          })
          const n4 = state[n3][ac.payload.selecteddate].findIndex((d, i) => {
            return Object.keys(d)[0] === ac.payload.timestamp
          })
          // *刪除舊項目
          if (state[n3][ac.payload.selecteddate].length === 1) {
            state.splice(n3, 1)
          } else {
            state[n3][ac.payload.selecteddate].splice(n4, 1)
          }
          // *新增一筆
          const newdayitem = {
            [ac.payload.newdata.newinputDate]: [
              {
                [ac.payload.timestamp]: ac.payload.newdata
              }
            ]
          }
          state.push(newdayitem)
        } else {
          // *替換項目
          const n2 = state[n][ac.payload.newdata.newinputDate].findIndex(
            (d, i) => {
              return Object.keys(d)[0] === ac.payload.timestamp
            }
          )
          state[n][ac.payload.newdata.newinputDate][n2][ac.payload.timestamp] =
            ac.payload.newdata
        }
        return state
      }
      const newstate = updatedata(state)
      st.arrivallistdata = newstate
    },
    editListdata(st, ac) {
      st.editing = true
      let state = JSON.parse(JSON.stringify(current(st.editItam)))
      switch (ac.payload.type) {
        case 'data':
          state = ac.payload.value
          break
        case 'checkboxes':
          state.checkvaluearr = ac.payload.value
          break
        case 'customerId':
          state.customerId = ac.payload.value
          break
        case 'newinputDate':
          state.newinputDate = ac.payload.value
          break
        case 'goods':
          state.newcontent[ac.payload.value.order] = ac.payload.value.data
          break
        case 'deletelistitem':
          state.newcontent.splice(ac.payload.value, 1)
          break
        case 'addlistitem':
          state.newcontent.push('')
          break
      }
      st.editItam = state
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
