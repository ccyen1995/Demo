import styles from "./CustomerDataEdit.module.css";
import { useState } from "react";

function CustomerData(props) {
  const date = props.inputDate.toISOString().substring(0, 10);
  const [firsttype, setfirsttype] = useState(true);
  const [isanyword, setisanyword] = useState(false);
  const [long, setlong] = useState(true);
  //*改變customerid欄位
  function setid(e) {
    props.setcustomerId(e.target.value);
    setisanyword(true);
    if (e.target.value == "") {
      setisanyword(false);
      setlong(false);
    }
  }
  //*清除customerid欄位，回歸到空值
  function clearid() {
    if (firsttype) {
      setlong(false);
      setfirsttype(false);
      props.setcustomerId("");
    }
  }
  //*裡面有字嗎?
  function anyword(e) {
    if (e.target.value == "") {
      setisanyword(false);
    }
    if (!isanyword) {
      setfirsttype(true);
      setlong(true);
    }
    return;
  }
  //*改變日期

  function changeDate(e) {
    props.setinputDate(new Date(e.target.value));
  }
  
  return (
    <div className={styles.frame}>
      <div>
        <label htmlFor="CustomerData_CustomerId">客戶代號</label>
        <div>
          <span>E -</span>
          <input
            type="number"
            id="CustomerData_CustomerId"
            value={props.customerId}
            onChange={setid}
            onClick={clearid}
            onBlur={anyword}
            placeholder={!long ? "" : "客戶代號"}
            className={isanyword || !long ? styles.opp : styles.op}
            maxLength={3}
          ></input>
        </div>
      </div>
      <div>
        <p>客戶代號</p>
        <p>自動帶入</p>
      </div>
      <div>
        <label htmlFor="CustomerData_Date">入庫日期</label>
        <input
          value={date}
          min={"2020-01-01"}
          max={"2099-12-31"}
          type="date"
          id="CustomerData_Date"
          onChange={changeDate}
        ></input>
      </div>
    </div>
  );
}
export default CustomerData;
