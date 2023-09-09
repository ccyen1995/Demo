import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./Store/Store";
import Menu from "./Components/Menu/Menu";
import ArrivalList from "./Components/ArrivalList/ArrivalList";
import AddArrivalItem from "./Components/ArrivalList/AddArrivalItem";
import { useState } from "react";
import { AddArrivalItem_context_Provider } from "./Context/AddArrivalItem_context";

import Backdrop from "./Components/UI/Backdrop";
import CheckModal from "./Components/UI/CheckModal";
import { useSelector } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

function Frame(props) {
  const [arrivallist, setarrivallist] = useState([]);
  const backdropState = useSelector((state) => state.backdrop);
  const confirmmodalState = useSelector((state) => state.confirmmodal);

  //*拿到資料並新增至"到貨列表"的陣列(arrivallist)中
  function getdata(id, date, checks, content) {
    setarrivallist((p) => {
      const newcontent = content.map((o) => {
        return o;
      });
      const checkvaluearr = Object.values(checks);
      const data = {
        id,
        date,
        newcontent,
        checkvaluearr,
      };
      p.push(data);
      p.reverse();
      return [...p];
    });
  }
  function deleteListItem(n) {
    setarrivallist((p) => {
      p.splice(n, 1);
      return [...p];
    });
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {backdropState ? <Backdrop></Backdrop> : null}
      {confirmmodalState ? <CheckModal></CheckModal> : null}
      <Menu></Menu>
      <ArrivalList
        data={arrivallist}
        deleteListItem={deleteListItem}
      ></ArrivalList>
      <AddArrivalItem_context_Provider>
        <AddArrivalItem getdata={getdata} h={arrivallist}></AddArrivalItem>
      </AddArrivalItem_context_Provider>
    </div>
  );
}

root.render(
  <Provider store={store}>
    <Frame></Frame>
  </Provider>
);
