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
  function getdata(id, date, checks, content) {
    const data = {
      id,
      date,
      checks,
      content,
    };
    setarrivallist((p) => {
      return [data, ...p];
    });
    console.log(data);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Menu></Menu>
      <ArrivalList></ArrivalList>
      <AddArrivalItem getdata={getdata}></AddArrivalItem>
    </div>
  );
}

root.render(<Frame></Frame>);
