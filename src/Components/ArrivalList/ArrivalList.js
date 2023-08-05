import styles from "./ArrivalList.module.css";
import ArrivalItem from "./ArrivalItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";

function ArrivalList(props) {
  console.log(props);
  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        {props.data.map((data, i, arr) => {
          return <ArrivalItem key={i} keys={i} data={data}></ArrivalItem>;
        })}
      </div>
      <div className={styles.filterSec}>
        <div className={styles.filterDiv}>
          <label htmlFor="co">公司代號：</label>
          <select id="co" className={styles.filterSelect}>
            <option>None</option>
            <option>E023</option>
            <option>E056</option>
            <option>E119</option>
          </select>
          <button className={styles.selectDeleteBtn}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <button className={styles.filterBtn}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
  );
}
export default ArrivalList;
