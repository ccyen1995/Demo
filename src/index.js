import { createRoot } from "react-dom/client";
import "./index.css";
import Menu from "./Components/Menu/Menu";
import ArrivalList from "./Components/ArrivalList/ArrivalList";
import AddArrivalItem from "./Components/ArrivalList/AddArrivalItem";
import { useState } from "react";

const container = document.getElementById("root");
const root = createRoot(container);

const arrivalitem = {
  order: 0,
  content: {
    customId: "",
    customName: "",
    storeDay: "",
    checkbox: [true, true, false],
    content: [],
  },
};
function Frame(props) {
  const [arrivallist, setarrivallist] = useState([]);

  //*拿到資料並新增至"到貨列表"的陣列(arrivallist)中
  function getdata(id, date, checks, content) {
    // function getdata(content) {
    setarrivallist((p) => {
      const g = content.map((o) => o);
      const f = Object.values(checks);
      const data = {
        id,
        date,
        f,
        g,
        // content,
      };
      p.push(data);
      p.reverse();
      return [...p];
    });
  }
  // console.log(arrivallist);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Menu></Menu>
      <ArrivalList data={arrivallist}></ArrivalList>
      <AddArrivalItem getdata={getdata} h={arrivallist}></AddArrivalItem>
    </div>
  );
}

root.render(<Frame></Frame>);
