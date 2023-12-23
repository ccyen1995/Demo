import { uiActions } from './ui_slice'

export const sandArrivallistData = ({ data, extra }) => {
  const datenow = Date.now()
  return async (dispatch) => {
    const sendRequest = async () => {
      let response
      if (extra === '') {
        const newinputDate = JSON.stringify(data.inputDate).slice(1, 11)
        // const newinputDate = data.inputDate
        //   .toLocaleDateString()
        //   .replace(/\//g, "-");
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${datenow}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(data)
          }
        )
      } else if (extra) {
        const newinputDate = data.inputDate.slice(0, 10)
        response = await fetch(
          `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}/${data.keys}.json`,
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
      dispatch(
        uiActions.showNotification({
          status: 'error',
          message: '資料未送出'
        })
      )
    }
  }
}
