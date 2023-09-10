import { uiActions } from "./ui_slice";

export const sandArrivallistData = (data) => {
  const newinputDate = data.inputDate.toLocaleDateString().replace(/\//g, "-");

  console.log(newinputDate);
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist/${newinputDate}.json`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          message: "已送出資料",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          message: "資料未送出",
        })
      );
    }
  };
};
