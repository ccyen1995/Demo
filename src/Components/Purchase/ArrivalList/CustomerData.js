import styles from "./CustomerData.module.css"
function CustomerData({ order, id, date }) {
  return (
    <div className={styles.frame}>
      <div className={styles.div_1}>
        <p>編號</p>
        <p>{order + 1}</p>
      </div>
      <div className={styles.div_2}>
        <p>客戶代號</p>
        <p>{id}</p>
      </div>
      <div className={styles.div_3}>
        <p>客戶名稱</p>
        <p>安安你好嗎</p>
      </div>
      <div className={styles.div_4}>
        <p>入庫日期</p>
        <p>{date.replace(/-/g, "/")}</p>
      </div>
    </div>
  )
}
export default CustomerData
