import styles from "./GoodsEdit.module.css";
import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
function GoodsEdit(props) {
  const ctx = useContext(AddArrivalItem_context);
  const [ndata, setndata] = useState({
    order: props.keys,
    mainname: "",
    subname: "",
    amount: 0,
  });
  //*拿到輸入值
  function getValues(e) {
    setndata((p) => {
      const idd = e.target.attributes.idd.value;
      const value = e.target.value;
      if (idd == "amount") {
        let val = parseInt(value) || 0;
        //==parseInt()可以直接用來過濾掉非數字的值
        p[idd] = val;
      } else {
        p[idd] = value;
      }
      p.order = props.keys;
      return { ...p };
    });
  }

  useEffect(() => {
    //* 改變到貨陣列
    ctx.setcontent((p) => {
      p[props.keys] = Object.assign({}, ndata);
      return [...p];
    });
    //*判斷是否有效
    if (ndata.mainname !== "" && ndata.amount !== 0) {
      ctx.setndatavalid(true);
    } else {
      ctx.setndatavalid(false);
    }
  }, [ndata]);
  if (ctx.clear) {
    ndata.mainname = "";
    ndata.subname = "";
    ndata.amount = 0;
  }
  return (
    <div className={styles.frame}>
      {!props.isbtn || (
        <button className={styles.minusBtn} onClick={ctx.deletelistitem}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      )}
      {!props.isbtn || (
        <button className={styles.plusBtn} onClick={ctx.addlistitem}>
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
          value={ndata.mainname}
          idd="mainname"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => {
            getValues(e);
          }}
          value={ndata.subname}
          idd="subname"
        ></input>
        <input
          type="text"
          onChange={(e) => {
            getValues(e);
          }}
          value={ndata.amount ? ndata.amount : ""}
          idd="amount"
          required
        ></input>
        <span>件</span>
      </div>
    </div>
  );
}
export default GoodsEdit;
//==可以在eventHandler中創建所需要的資料及其形態，而不是在handler之外先創造一個空物件，這樣才不會訪問外部變數造成sideEffect
//==並在之後清除input，使用雙向綁定(將input的value attribute綁定為state值，這樣除了在輸入時監聽input的值並改變state之外，還將更新的值直接植入到input的value)
