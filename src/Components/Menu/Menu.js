import Userinfo from "./Userinfo";
import Logo from "./Logo";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.frame}>
      <Logo></Logo>
      <div className={styles.menuLink}>
        <a>進貨管理</a>
        <a>庫存管理</a>
        <a>出貨管理</a>
        <a>客戶管理</a>
        <a>用戶管理</a>
      </div>
      <Userinfo></Userinfo>
    </div>
  );
}
export default Menu;
