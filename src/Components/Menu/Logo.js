import wmsImg from "../../img/inventory.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <div className={styles.imgDiv}>
        <img src={wmsImg}></img>
      </div>
      <p>WMS</p>
    </div>
  );
}

export default Logo;
