import styles from "./Goods.module.css";
function Goods(props) {
  return (
    <div className={styles.frame}>
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>{props.data.order + 1}</span>
        <span>{props.data.mainname}</span>
        <span>{props.data.subname}</span>
        <span>{props.data.amount}件</span>
      </div>
    </div>
  );
}
export default Goods;
