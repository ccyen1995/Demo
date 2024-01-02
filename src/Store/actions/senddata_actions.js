import { uiActions } from '../slices/ui_slice'
import { arrivallistdataActions } from '../slices/arrivallistdata_slice'

export const sandArrivallistData = ({ data, extra }) => {
  const datenow = Date.now()
  return async (dispatch) => {
    const sendRequest = async () => {
      let response

      if (extra === '') {
        const newinputDate = data.newinputDate.slice(1, 11)
        // const newinputDate = data.inputDate
        //   .toLocaleDateString()
        //   .replace(/\//g, "-");
        // ==
        dispatch(
          arrivallistdataActions.updateListdata({
            newinputDate,
            now: datenow,
            data
          })
        )
        // ==
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${datenow}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(data)
          }
        )
      } else if (extra === 'deletelistitem') {
        const newinputDate = data.newinputDate.slice(1, 11)

        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${data.keys}.json`,
          {
            method: 'DELETE'
          }
        )
        const datakeys = data.keys
        dispatch(
          arrivallistdataActions.deleteListdata({
            datakeys,
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
