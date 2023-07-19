import styles from "./Goods.module.css";
function Goods() {
  return (
    <div className={styles.frame}>
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>01</span>
        <span>1B0001胸腹肉</span>
        <span>999-321-443</span>
        <span>1000件</span>
      </div>
    </div>
  );
}
export default Goods;
