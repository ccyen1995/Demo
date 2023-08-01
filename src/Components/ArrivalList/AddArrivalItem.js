import styles from "./AddArrivalItem.module.css";
import { useState } from "react";
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function AddArrivalItem(props) {
  const [listarr, setlistarr] = useState([]);
  const [clear, setclear] = useState(true);
  const [content, setcontent] = useState([]);
  const [checkState, setcheckState] = useState({
    transcribeweight: false,
    mixpallet: false,
    classifyexpiry: false,
  });
  const [customerId, setcustomerId] = useState("");
  const [inputDate, setinputDate] = useState(new Date());
  console.log(customerId);
  // console.log(inputDate);
  // console.log(checkState);
  // console.log(content);
  // new Date().toISOString().substring(0, 10)
  //? 當子元件只使用狀態，卻不藉由母元件的函數向上傳遞資訊時，狀態管理是否只能集中到母元件進行處裡?

  function l() {
    setlistarr((p) => {
      p.pop();
      return [...p];
    });
  }
  function j() {
    setlistarr((p) => {
      let num = p.length;
      p.push({ num: num });
      return [...p];
    });
  }
  if (listarr.length == 0) {
    j();
  }
  return (
    <form
      className={styles.frame}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.div1}>
        <CustomerDataEdit
          customerId={customerId}
          setcustomerId={setcustomerId}
          inputDate={inputDate}
          setinputDate={setinputDate}
        ></CustomerDataEdit>
        <CheckBoxesEdit setcheckState={setcheckState}></CheckBoxesEdit>
      </div>
      {listarr.map((obj, i, arr) => {
        let isbtn = true;
        if (i + 1 < arr.length) {
          isbtn = false;
        }
        return (
          <GoodsEdit
            key={i}
            keys={i}
            fns={{ 1: j, 2: l }}
            isbtn={isbtn}
            content={content}
          ></GoodsEdit>
        );
      })}
      <div className={styles.buttonDiv}>
        <button
          type="button"
          className={styles.checkBtn}
          onClick={() => {
            setclear(!clear);
          }}
        >
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          清空
        </button>
        <button
          className={styles.modifyBtn}
          type="submit"
          onClick={() => {
            props.getdata(customerId, inputDate, checkState, content);
          }}
        >
          <FontAwesomeIcon icon={faPen} className={styles.modifyBtn_icon} />
          送出
        </button>
      </div>
    </form>
  );
}
export default AddArrivalItem;
