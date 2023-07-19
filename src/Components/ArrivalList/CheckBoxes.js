import styles from "./CheckBoxes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function CheckBoxes() {
  return (
    <div className={styles.frame}>
      <div>
        <FontAwesomeIcon icon={faCheck} />
        <span>抄重量</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCheck} />
        <span>混合板</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faCheck} />
        <span>分效期</span>
      </div>
    </div>
  );
}

export default CheckBoxes;
