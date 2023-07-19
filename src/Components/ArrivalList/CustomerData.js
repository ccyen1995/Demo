import styles from "./CustomerData.module.css";
function CustomerData() {
  return (
    <div className={styles.frame}>
      <div className={styles.div_1}>
        <p>編號</p>
        <p>01</p>
      </div>
      <div className={styles.div_2}>
        <p>客戶代號</p>
        <p>E023</p>
      </div>
      <div className={styles.div_3}>
        <p>客戶名稱</p>
        <p>安安你好嗎</p>
      </div>
      <div className={styles.div_4}>
        <p>入庫日期</p>
        <p>6/20</p>
      </div>
    </div>
  );
}
export default CustomerData;
