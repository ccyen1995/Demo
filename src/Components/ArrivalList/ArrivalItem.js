import styles from "./ArrivalItem.module.css";
import CustomerData from "./CustomerData";
import CheckBoxes from "./CheckBoxes";
import Goods from "./Goods";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

function ArrivalItem({ keys, data, deleteListItem }) {
  const { id, date, checkvaluearr, newcontent } = data;
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerData order={keys} id={id} date={date}></CustomerData>
        <CheckBoxes checks={checkvaluearr}></CheckBoxes>
      </div>
      {newcontent.map((data, i, arr) => {
        return <Goods key={i} data={data}></Goods>;
      })}
      <div className={styles.buttonDiv}>
        <button className={styles.checkBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          驗收
        </button>
        <button className={styles.modifyBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.modifyBtn_icon} />
          修改
        </button>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          deleteListItem(keys);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
export default ArrivalItem;
