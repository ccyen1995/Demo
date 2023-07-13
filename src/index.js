import { createRoot } from "react-dom/client";
import "./index.css";
import Menu from "./Components/Menu/Menu";
import ArrivalList from "./Components/ArrivalList/ArrivalList";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <div style={{ display: "flex" }}>
    <Menu></Menu>
    <ArrivalList></ArrivalList>
  </div>
);

// root.render( <Menu title={"Andy Chang的Like"} menuItems={menuItemArr}/>);
