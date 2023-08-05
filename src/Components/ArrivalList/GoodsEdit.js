import styles from "./GoodsEdit.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function GoodsEdit(props) {
  //*拿到輸入值
  const [ndata, setndata] = useState({
    order: 0,
    mainname: "",
    subname: "",
    amount: 0,
  });
  function getValues(e) {
    setndata((p) => {
      const idd = e.target.attributes.idd.value;
      p.order = props.keys;
      p[idd] = e.target.value;
      props.o(ndata);
      return { ...p };
    });
  }
  console.log(props.h);
  //==可以在eventHandler中創建所需要的資料及其形態，而不是在handler之外先創造一個空物件，這樣才不會訪問外部變數造成sideEffect
  //==並在之後清除input，使用雙向綁定(將input的value attribute綁定為state值，這樣除了在輸入時監聽input的值並改變state之外，還將更新的值直接植入到input的value)
  return (
    <div className={styles.frame}>
      {!props.isbtn || (
        <button className={styles.minusBtn} onClick={props.fns["fn2"]}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      )}
      {!props.isbtn || (
        <button className={styles.plusBtn} onClick={props.fns["fn1"]}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>{props.keys < 9 ? "0" + (props.keys + 1) : props.keys + 1}</span>
        <input
          type="text"
          onChange={(e) => {
            getValues(e);
          }}
          idd="mainname"
        ></input>
        <input
          type="text"
          onChange={(e) => {
            getValues(e);
          }}
          idd="subname"
        ></input>
        <input
          type="number"
          onChange={(e) => {
            getValues(e);
          }}
          idd="amount"
        ></input>
        <span>件</span>
      </div>
    </div>
  );
}
export default GoodsEdit;
