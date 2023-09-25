import classes from "./CheckModal.module.css";
import { confirmmodalActions } from "../../Store/confirmmodal_slice";
import { backdropActions } from "../../Store/backdrop_slice";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
const CheckModal = () => {
  const ctx = useContext(AddArrivalItem_context);
  const switchtype = useSelector((s) => s.confirmmodal.connectSwitch);
  const btnname = useSelector((s) => s.confirmmodal.btnname);

  const dispatch = useDispatch();
  function confirmHandler() {
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
    if (switchtype == "clearInput") {
      ctx.setclear(true);
      ctx.setcontent([]);
      dispatch(confirmmodalActions.reset("reset"));
    }
    if (switchtype == "deleteitem") {
      
      dispatch(confirmmodalActions.reset("reset"));
    }
    
  }
  function cancelHandler() {
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
  }

  return (
    <div className={classes.frame}>
      <p>確定要{btnname}嗎?</p>
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
