import styles from "./AddArrivalItem.module.css";
import { useState } from "react";
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function AddArrivalItem(props) {
  const [clear, setclear] = useState(true);
  const [content, setcontent] = useState([]);
  const [checkState, setcheckState] = useState({
    transcribeweight: false,
    mixpallet: false,
    classifyexpiry: false,
  });
  const [customerId, setcustomerId] = useState("");
  const [inputDate, setinputDate] = useState(new Date());
  //? 當子元件只使用狀態，卻不藉由母元件的函數向上傳遞資訊時，狀態管理是否只能集中到母元件進行處裡?
  //*新增到貨品項
  function addlistitem() {
    const n = {
      order: 0,
      mainname: "",
      subname: "",
      amount: 0,
    };
    setcontent((p) => {
      return [...p, n];
    });
  }
  //*刪除到貨品項
  function deletelistitem() {
    setcontent((p) => {
      p.pop();
      return [...p];
    });
  }
  if (content.length == 0) {
    addlistitem();
  }
  function o(d) {
    setcontent((p) => {
      p[d.order] = d;
      console.log(p);
      return p;
    });
  }
  console.log(checkState);
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
      {content.map((obj, i, arr) => {
        let isbtn = true;
        if (i + 1 < arr.length) {
          isbtn = false;
        }
        return (
          <GoodsEdit
            key={i}
            keys={i}
            fns={{ fn1: addlistitem, fn2: deletelistitem }}
            isbtn={isbtn}
            setcontent={setcontent}
            h={props.h}
            o={o}
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
            // props.getdata(content);
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
