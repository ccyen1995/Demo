import styles from "./ArrivalList.module.css";
import ArrivalItem from "./ArrivalItem";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";

function ArrivalList(props) {
  const [selectedID, setselectedID] = useState("");
  const r = props.data.map((data) => data.id);
  let set1 = [...new Set(r)].reverse();
  //*設置篩選器內容
  function selectoroptionHandler(e) {
    if (e.target.value == "None") {
      setselectedID("");
    } else {
      setselectedID(e.target.value.slice(1));
    }
  }
  //*設置漏斗按鈕動畫
  const [filteranimate, setfilteranimate] = useState(true);
  function filteranimation() {
    setfilteranimate(!filteranimate);
  }
  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        {props.data.map((data, i, arr) => {
          if (selectedID == "" || data.id == y) {
            return (
              <ArrivalItem
                key={i}
                keys={i}
                data={data}
                deleteListItem={props.deleteListItem}
              ></ArrivalItem>
            );
          }
        })}
      </div>
      <div className={styles.filterSec}>
        <div
          className={`${styles.filterDiv} ${
            filteranimate ? "" : styles.filterDivact
          }`}
        >
          <label htmlFor="co">公司代號：</label>
          <select
            id="co"
            className={styles.filterSelect}
            onChange={selectoroptionHandler}
          >
            <option>None</option>
            {set1.map((n, i) => (
              <option key={i}>{"E" + n}</option>
            ))}
          </select>
          <button
            className={styles.selectDeleteBtn}
            onClick={() => {
              setselectedID("");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <button className={styles.filterBtn} onClick={filteranimation}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
  );
}
export default ArrivalList;
