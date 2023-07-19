import styles from "./AddArrivalItem.module.css";
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function AddArrivalItem() {
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerDataEdit></CustomerDataEdit>
        <CheckBoxesEdit></CheckBoxesEdit>
      </div>
      <GoodsEdit></GoodsEdit>
      {/* <GoodsEdit></GoodsEdit> */}
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
