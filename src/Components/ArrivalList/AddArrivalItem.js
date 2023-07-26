import styles from "./AddArrivalItem.module.css";
import { useState } from "react";
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function AddArrivalItem() {
  const [k, setk] = useState([]);
  function l() {
    setk((p) => {
      p.pop();
      return [...p];
    });
  }
  function j() {
    setk((p) => {
      let num = p.length;
      p.push({ num: num });
      return [...p];
    });
  }
  if (k.length == 0) {
    j();
  }

  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerDataEdit></CustomerDataEdit>
        <CheckBoxesEdit></CheckBoxesEdit>
      </div>
      {k.map((obj, i, arr) => {
        let isbtn = true;
        if (i + 1 < arr.length) {
          isbtn = false;
        }
        return (
          <GoodsEdit
            key={i}
            keys={i < 9 ? "0" + (i + 1) : i + 1}
            fns={{ 1: j, 2: l }}
            isbtn={isbtn}
          ></GoodsEdit>
        );
      })}
      <div className={styles.buttonDiv}>
        <button className={styles.checkBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          清空
        </button>
        <button className={styles.modifyBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.modifyBtn_icon} />
          送出
        </button>
      </div>
    </div>
  );
}
export default AddArrivalItem;
