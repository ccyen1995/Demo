import styles from "./CheckBoxesEdit.module.css";
function CheckBoxesEdit(props) {
  //*setchecked
  function setChecked(e) {
    const inputId = e.target.id;
    const inputChecked = e.target.checked;
    props.setcheckState((p) => {
      p[inputId] = inputChecked;
      console.log(p);
      return p;
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
