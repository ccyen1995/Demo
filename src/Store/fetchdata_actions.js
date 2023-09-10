import { uiActions } from "./ui_slice";
import { arrivallistdataActions } from "./arrivallistdata_slice";

export const getArrivallistData = () => {
  return async (dispatch) => {
    // dispatch(
    //   uiActions.showNotification({
    //     status: "pending",
    //     message: "載入中",
    //   })
    // );
    const sendRequest = async () => {
      const response = await fetch(
        `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist.json`
      );

      if (!response.ok) {
        throw new Error("getting data failed.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await sendRequest();
      console.log(data);
      dispatch(arrivallistdataActions.additem(data));
    } catch (error) {
      console.log(error);
    }
  };
};
