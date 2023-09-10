import classes from "./CheckModal.module.css";
import { confirmmodalActions } from "../../Store/confirmmodal_slice";
import { backdropActions } from "../../Store/backdrop_slice";
import { useDispatch } from "react-redux";
const CheckModal = () => {
  const dispatch = useDispatch();
  function confirmHandler() {
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
  }
  function cancelHandler() {
    dispatch(confirmmodalActions.hide());
    dispatch(backdropActions.hide());
  }

  return (
    <div className={classes.frame}>
      <p>確定要清空嗎?</p>
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
