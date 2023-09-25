import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Store/Store";
//==component
import Menu from "./Components/Menu/Menu";
import ArrivalList from "./Components/ArrivalList/ArrivalList";
import AddArrivalItem from "./Components/ArrivalList/AddArrivalItem";
//==state
import { AddArrivalItem_context_Provider } from "./Context/AddArrivalItem_context";
import { uiActions } from "./Store/ui_slice";
//==UI
import Backdrop from "./Components/UI/Backdrop";
import CheckModal from "./Components/UI/CheckModal";
import Notification from "./Components/UI/Notification";

const container = document.getElementById("root");
const root = createRoot(container);

function Frame() {
  const backdropState = useSelector((state) => state.backdrop);
  const confirmmodalState = useSelector((state) => state.confirmmodal.show);
  const uiState = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    //*等動畫跑完再讓提示方塊消失
    setTimeout(() => {
      dispatch(uiActions.hide());
    }, 1200);
  }, [uiState.show]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {uiState.show ? (
        <Notification res={uiState.notification}></Notification>
      ) : null}
      {backdropState ? <Backdrop></Backdrop> : null}
      <Menu></Menu>
      <ArrivalList></ArrivalList>
      <AddArrivalItem_context_Provider>
        {confirmmodalState ? <CheckModal></CheckModal> : null}
        <AddArrivalItem></AddArrivalItem>
      </AddArrivalItem_context_Provider>
    </div>
  );
}

root.render(
  <Provider store={store}>
    <Frame></Frame>
  </Provider>
);
