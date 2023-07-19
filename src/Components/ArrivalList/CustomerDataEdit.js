import styles from "./CustomerDataEdit.module.css";
function CustomerData() {
  const inputDate = new Date().toISOString().substring(0, 10);
  return (
    <div className={styles.frame}>
      <div className={styles.div_2}>
        <label htmlFor="CustomerData_CustomerId">客戶代號</label>
        <input defaultValue={"輸入代號"} id="CustomerData_CustomerId"></input>
      </div>
      <div className={styles.div_3}>
        <p>客戶名稱</p>
        <p>自動帶入</p>
      </div>
      <div className={styles.div_4}>
        <label htmlFor="CustomerData_Date">入庫日期</label>
        <input
          defaultValue={inputDate}
          min={"2020-01-01"}
          max={"2099-12-31"}
          type="date"
          id="CustomerData_Date"
        ></input>
      </div>
    </div>
  );
}
export default CustomerData;
