import styles from "./CheckBoxesEdit.module.css";
import { useState } from "react";
function CheckBoxesEdit(props) {
  // const [checkState, setcheckState] = useState({
  //   transcribeweight: false,
  //   mixpallet: false,
  //   classifyexpiry: false,
  // });
  function setChecked(e) {
    const inputId = e.target.id;
    const inputChecked = e.target.checked;
    props.setcheckState((p) => {
      p[inputId] = inputChecked;
      return p;
    });
  }
  return (
    <div className={styles.frame}>
      <label htmlFor="transcribeweight">
        <input
          type="checkbox"
          id="transcribeweight"
          onClick={setChecked}
        ></input>
        抄重量
      </label>
      <label htmlFor="mixpallet">
        <input type="checkbox" id="mixpallet" onClick={setChecked}></input>
        混合板
      </label>
      <label htmlFor="classifyexpiry">
        <input type="checkbox" id="classifyexpiry" onClick={setChecked}></input>
        分效期
      </label>
    </div>
  );
}
export default CheckBoxesEdit;
