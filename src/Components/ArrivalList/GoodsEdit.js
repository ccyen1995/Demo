import styles from "./GoodsEdit.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Goods(props) {
  const [textone, settextone] = useState("");
  const [texttwo, settexttwo] = useState("");
  const [amount, setamount] = useState("");

  const [ndata, setndata] = useState({
    order: props.keys,
    mainname: "",
    subname: "",
    amount: 0,
  });

  function getValues(e) {
    if (e.target.attributes.idd.value == "textone") {
      ndata.mainname = e.target.value;
    } else if (e.target.attributes.idd.value == "texttwo") {
      ndata.subname = e.target.value;
    } else {
      ndata.amount = e.target.value;
    }
    props.content[props.keys] = ndata;
  }
  //可以在eventHandler中創建所需要的資料及其形態，而不是在handler之外先創造一個空物件，這樣才不會訪問外部變數造成sideEffect
  //並在之後清除input，使用雙向綁定(將input的value attribute綁定為state值，這樣除了在輸入時監聽input的值並改變state之外，還將更新的值直接植入到input的value)
  return (
    <div className={styles.frame}>
      {!props.isbtn || (
        <button className={styles.minusBtn} onClick={props.fns[2]}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      )}
      {!props.isbtn || (
        <button className={styles.plusBtn} onClick={props.fns[1]}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>{props.keys < 9 ? "0" + (props.keys + 1) : props.keys + 1}</span>
        <input type="text" onChange={getValues} idd="textone"></input>
        <input type="text" onChange={getValues} idd="texttwo"></input>
        <input type="number" onChange={getValues} idd="amount"></input>
        <span>件</span>
      </div>
    </div>
  );
}
export default Goods;
