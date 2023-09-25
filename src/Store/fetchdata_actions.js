import { arrivallistdataActions } from "./arrivallistdata_slice";

export const getArrivallistData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist.json?`
      );

      if (!response.ok) {
        throw new Error("getting data failed.");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const data = await sendRequest();
      if (data == null) return;
      //*轉為陣列
      const y = Object.entries(data).map((it) => {
        let d = it[0];
        let r = Object.values(it[1]);
        return { [d]: r };
      });
      dispatch(arrivallistdataActions.converitem(y));
    } catch (error) {
      console.log(error);
    }
  };
};
