import classes from "./CheckModal.module.css";
import { confirmmodalActions } from "../../Store/confirmmodal_slice";
import { backdropActions } from "../../Store/backdrop_slice";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
import { sandArrivallistData } from "../../Store/senddata_actions";
import { arrivallistdataActions } from "../../Store/arrivallistdata_slice";
const CheckModal = () => {
  const ctx = useContext(AddArrivalItem_context);
  const confirmstate = useSelector((s) => s.confirmmodal);
  const dispatch = useDispatch();
  function confirmHandler() {
    // console.log(confirmstate.connectSwitch);
    switch (confirmstate.connectSwitch) {
      case "clearInput":
        ctx.setclear(true);
        ctx.setcontent([]);
        dispatch(confirmmodalActions.reset("reset"));
        break;
      case "deletelistitem":
        dispatch(arrivallistdataActions.turntrue());
        dispatch(
          sandArrivallistData({
            data: confirmstate.extra,
            extra: "deletelistitem",
          })
        );
        break;
    }
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
  }
  function cancelHandler() {
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
  }

  return (
    <div className={classes.frame}>
      <p>確定要{confirmstate.btnname}嗎?</p>
      <div className={classes.buttons}>
        <button className={classes.cancel} onClick={cancelHandler}>
          取消
        </button>
        <button className={classes.confirm} onClick={confirmHandler}>
          確定
        </button>
      </div>
    </div>
  );
};
export default CheckModal;
