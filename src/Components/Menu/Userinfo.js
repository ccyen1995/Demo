import { useState } from "react";
import styles from "./Userinfo.module.css";
import userImg from "../../img/user.png";

function Userinfo() {
  const [Login, setLogin] = useState(false);
  return (
    <div className={styles.frame}>
      <div className={styles.imgDiv}>
        <img src={userImg}></img>
      </div>
      <p> {Login ? "皮卡丘" : "請登入"}</p>
      <button
        type="button"
        onClick={() => setLogin(!Login)}
        className={Login ? styles.login : ""}
      >
        {Login ? "登出" : "登入"}
      </button>
    </div>
  );
}
export default Userinfo;
