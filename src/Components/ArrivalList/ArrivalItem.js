import styles from "./ArrivalItem.module.css";
import CustomerData from "./CustomerData";
import CheckBoxes from "./CheckBoxes";

function ArrivalItem() {
  return (
    <div>
      <CustomerData></CustomerData>
      <CheckBoxes></CheckBoxes>
    </div>
  );
}
export default ArrivalItem;
