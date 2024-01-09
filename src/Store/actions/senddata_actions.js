import { uiActions } from '../slices/ui_slice'
import { arrivallistdataActions } from '../slices/arrivallistdata_slice'

export const sandArrivallistData = ({ data, action, now }) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      let response

      if (action === 'senddata') {
        const { newinputDate } = data
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${now}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(data)
          }
        )
      } else if (action === 'deletelistitem') {
        const { newinputDate, keys } = data

        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${keys}.json`,
          {
            method: 'DELETE'
          }
        )
        dispatch(
          arrivallistdataActions.deleteListdata({
            keys,
            newinputDate
          })
        )
      }
      if (!response.ok) {
        throw new Error('Sending data failed.')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          message: '已送出資料'
        })
      )
    } catch (error) {
      console.log(error)
      dispatch(
        uiActions.showNotification({
          status: 'error',
          message: '資料未送出'
        })
      )
    }
  }
}
export const sandEditlistData = ({ selecteddate, data, timestamp }) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      // *假如編輯後的項目與原先不同日期，發出更新請求，否則發出代替請求
      let response
      const { newinputDate } = data

      if (selecteddate === newinputDate) {
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${selecteddate}/${timestamp}.json`,
          {
            method: 'PATCH',
            body: JSON.stringify(data)
          }
        )
      } else {
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${timestamp}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(data)
          }
        )
        if (!response.ok) {
          throw new Error('PUT data failed.')
        }
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${selecteddate}/${timestamp}.json`,
          {
            method: 'DELETE'
          }
        )
      }
      if (!response.ok) {
        throw new Error('Sending data failed.')
      }
    }

    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          message: '已送出資料'
        })
      )
    } catch (error) {
      console.log(error)
      dispatch(
        uiActions.showNotification({
          status: 'error',
          message: '資料未送出'
        })
      )
    }
  }
}
