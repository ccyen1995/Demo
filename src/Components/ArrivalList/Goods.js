import styles from "./Goods.module.css";
function Goods({ data }) {
  const { order, mainname, subname, amount } = data;
  return (
    <div className={styles.frame}>
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>{order + 1}</span>
        <span>{mainname}</span>
        <span>{subname}</span>
        <span>{amount}件</span>
      </div>
    </div>
  );
}
export default Goods;
