import styles from "./ArrivalItem.module.css";
import CustomerData from "./CustomerData";
import CheckBoxes from "./CheckBoxes";
import Goods from "./Goods";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

function ArrivalItem() {
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerData></CustomerData>
        <CheckBoxes></CheckBoxes>
      </div>
      <Goods></Goods>
      <Goods></Goods>
      <div className={styles.buttonDiv}>
        <button className={styles.checkBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon}/>
          驗收
        </button>
        <button className={styles.modifyBtn}>
          <FontAwesomeIcon icon={faPen}  className={styles.modifyBtn_icon}/>
          修改
        </button>
      </div>
      <button className={styles.deleteBtn}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
export default ArrivalItem;
