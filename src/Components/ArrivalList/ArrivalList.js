import styles from "./ArrivalList.module.css";
import ArrivalItem from "./ArrivalItem";
function ArrivalList() {
  console.log("ddd");
  return (
    <div className={styles.frame}>
      <div className={styles.innerframe}>
        <ArrivalItem></ArrivalItem>
        <ArrivalItem></ArrivalItem>
        <ArrivalItem></ArrivalItem>
      </div>
    </div>
  );
}
export default ArrivalList;
