import styles from "./ArrivalItem.module.css";
import CustomerData from "./CustomerData";
import CheckBoxes from "./CheckBoxes";
import Goods from "./Goods";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

function ArrivalItem(props) {
  const order = props.keys;
  const idd = props.data.id;
  const date = props.data.date;
  const checks = props.data.f;
  const content = props.data.g;
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerData order={order} idd={idd} date={date}></CustomerData>
        <CheckBoxes checks={checks}></CheckBoxes>
      </div>
      {content.map((data, i, arr) => {
        return <Goods key={i} data={data}></Goods>;
      })}
      {/* <Goods content={content}></Goods> */}
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
      <button className={styles.deleteBtn}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  );
}
export default ArrivalItem;
