import { arrivallistdataActions } from './arrivallistdata_slice'

export const getArrivallistData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist.json?'
      )

      if (!response.ok) {
        throw new Error('getting data failed.')
      }
      const data = await response.json()
      return data
    }

    try {
      const data = await sendRequest()
      if (data == null) throw Error('data is null')
      dispatch(arrivallistdataActions.converitem(data))
    } catch (error) {
      console.log(error)
    }
  }
}
