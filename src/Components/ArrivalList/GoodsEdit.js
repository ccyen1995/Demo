import styles from "./GoodsEdit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function Goods() {
  return (
    <div className={styles.frame}>
      <button className={styles.minusBtn}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button className={styles.plusBtn}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>01</span>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <span>件</span>
      </div>
    </div>
  );
}
export default Goods;
