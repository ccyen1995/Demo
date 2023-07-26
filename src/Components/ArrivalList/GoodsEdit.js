import styles from "./GoodsEdit.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Goods(props) {
  // const [inputdata] = useState();
  console.log(props);
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
        <span>{props.keys}</span>
        <input type="text"></input>
        <input type="text"></input>
        <input type="number"></input>
        <span>件</span>
      </div>
    </div>
  );
}
export default Goods;
