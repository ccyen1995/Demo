import styles from "./CustomerDataEdit.module.css";
import { useState } from "react";
function CustomerData() {
  const [customerId, setCustomerId] = useState("客戶代號");
  const [FistTimeFocus, setFirstTimeFocus] = useState(true);
  function clearCustomerId(e) {
    if (FistTimeFocus == true) {
      setCustomerId("");
      setFirstTimeFocus(false);
    }
  }
  function SetInputValue(e) {
    if (e.target.defaultValue.length == 4) {
      return;
    }
    if (!(0 <= e.nativeEvent.data && e.nativeEvent.data <= 9)) {
      setCustomerId((p) => p);
    } else {
      setCustomerId(e.target.value.slice(1));
    }
  }
  function blurFuc(e) {
    if (e.target.value == "E") {
      setCustomerId("客戶代號");
      setFirstTimeFocus(true);
    }
  }
  const inputDate = new Date().toISOString().substring(0, 10);
  return (
    <div className={styles.frame}>
      <div className={styles.div_2}>
        <label htmlFor="CustomerData_CustomerId">客戶代號</label>
        <input
          type="text"
          id="CustomerData_CustomerId"
          onFocus={clearCustomerId}
          value={"E" + customerId}
          onChange={SetInputValue}
          onBlur={blurFuc}
        ></input>
      </div>
      <div className={styles.div_3}>
        <p>客戶代號</p>
        <p>自動帶入</p>
      </div>
      <div className={styles.div_4}>
        <label htmlFor="CustomerData_Date">入庫日期</label>
        <input
          defaultValue={inputDate}
          min={"2020-01-01"}
          max={"2099-12-31"}
          type="date"
          id="CustomerData_Date"
        ></input>
      </div>
    </div>
  );
}
export default CustomerData;
