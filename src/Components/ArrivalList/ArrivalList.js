import { useState } from "react";
import styles from "./ArrivalList.module.css";
import { useDispatch, useSelector } from "react-redux";
//==component
import ArrivalItem from "./ArrivalItem";
//==icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
//==state
import { useContext } from "react";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";

function ArrivalList() {
  const ctx = useContext(AddArrivalItem_context);
  const [selectedID, setselectedID] = useState("");
  const dataID = ctx.arrivallist.map((data) => data.id);
  let set1 = [...new Set(dataID)].reverse();
  //==

  const list = useSelector((s) => s.arrivallistdata);
  console.log(list);

  //==
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
        {ctx.arrivallist
          .map((data, i, arr) => {
            if (selectedID == "" || data.id == selectedID) {
              return <ArrivalItem key={i} keys={i} data={data}></ArrivalItem>;
            }
          })
          .reverse()}
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
