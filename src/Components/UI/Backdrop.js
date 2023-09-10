import classes from "./Backdrop.module.css";
import { backdropActions } from "../../Store/backdrop_slice";
import { useDispatch } from "react-redux";

const Backdrop = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(backdropActions.hide());
  };
  return <div className={classes.backdrop} onClick={clickHandler}></div>;
};

export default Backdrop;
