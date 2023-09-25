import { useState, useEffect } from "react";
import styles from "./ArrivalList.module.css";
import { useDispatch, useSelector } from "react-redux";
//==component
import ArrivalItem from "./ArrivalItem";
//==icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faXmark } from "@fortawesome/free-solid-svg-icons";
//==state
import { getArrivallistData } from "../../Store/fetchdata_actions";
import { arrivallistdataActions } from "../../Store/arrivallistdata_slice";

function ArrivalList() {
  const dispatch = useDispatch();
  const list = useSelector((s) => s.arrivallistdata.arrivallistdata);
  const updatestate = useSelector((s) => s.arrivallistdata.update);

  console.log(list);

  useEffect(() => {
    dispatch(getArrivallistData());
    dispatch(arrivallistdataActions.turnfalse());
  }, [updatestate]);

  //?不斷重複渲染
  const nestlist = list.map((data) => {
    const dateclass = Object.keys(data)[0];
    const renderdata = data[dateclass];
    return renderdata;
  });
  const correctData = nestlist.flat();
  const [selectedID, setselectedID] = useState("");
  const dataID = correctData.map((data) => data.customerId);
  let set1 = [...new Set(dataID)].reverse();
  //==

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
        {correctData.map((data, i) => {
          if (selectedID == "" || data.id == selectedID) {
            return <ArrivalItem key={i} keys={i} data={data}></ArrivalItem>;
          }
        })}
        {/*context練習 */}
        {/* {ctx.arrivallist
          .map((data, i) => {
            if (selectedID == "" || data.id == selectedID) {
              return <ArrivalItem key={i} keys={i} data={data}></ArrivalItem>;
            }
          })
          .reverse()} */}
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
