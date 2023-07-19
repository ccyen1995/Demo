import styles from "./CheckBoxesEdit.module.css";
console.log(styles);
function CheckBoxesEdit() {
  return (
    <div className={styles.frame}>
      <label htmlFor="transcribeweight">
        <input type="checkbox" id="transcribeweight"></input>
        抄重量
      </label>
      <label htmlFor="mixpallet">
        <input type="checkbox" id="mixpallet"></input>
        混合板
      </label>
      <label htmlFor="classifyexpiry">
        <input type="checkbox" id="classifyexpiry"></input>
        分效期
      </label>
    </div>
  );
}
export default CheckBoxesEdit;
