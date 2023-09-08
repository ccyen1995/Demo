import styles from "./CheckBoxesEdit.module.css";
import { useContext } from "react";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
function CheckBoxesEdit() {
  const ctx = useContext(AddArrivalItem_context);
  //*setchecked
  function setChecked(e) {
    const inputId = e.target.id;
    const inputChecked = e.target.checked;
    ctx.setcheckState((p) => {
      p[inputId] = inputChecked;
      return { ...p };
      //==不管是回傳新址物件或是原址物件都不影響，因為在index.js中會轉換成新的value陣列
    });
  }
  return (
    <div className={styles.frame}>
      <label htmlFor="transcribeweight">
        <input
          type="checkbox"
          id="transcribeweight"
          onChange={setChecked}
        ></input>
        抄重量
      </label>
      <label htmlFor="mixpallet">
        <input type="checkbox" id="mixpallet" onChange={setChecked}></input>
        混合板
      </label>
      <label htmlFor="classifyexpiry">
        <input
          type="checkbox"
          id="classifyexpiry"
          onChange={setChecked}
        ></input>
        分效期
      </label>
    </div>
  );
}
export default CheckBoxesEdit;
