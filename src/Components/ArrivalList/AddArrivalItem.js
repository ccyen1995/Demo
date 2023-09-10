import { useContext } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddArrivalItem.module.css";
//==component
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
//==icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
//==state
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
import { confirmmodalActions } from "../../Store/confirmmodal_slice";
import { backdropActions } from "../../Store/backdrop_slice";
import { sandArrivallistData } from "../../Store/senddata_actions";

function AddArrivalItem() {
  const ctx = useContext(AddArrivalItem_context);
  const { customerId, inputDate, checkState, content } = ctx;
  const dispatch = useDispatch();
  //*拿到資料並新增至"到貨列表"的陣列(arrivallist)中
  function getdata(id, date, checks, content) {
    ctx.setarrivallist((p) => {
      const newcontent = content.map((o) => o);
      const checkvaluearr = Object.values(checks);
      const data = {
        id,
        date,
        newcontent,
        checkvaluearr,
      };
      p.push(data);
      return [...p];
    });
  }

  const submitHandler = () => {
    getdata(customerId, inputDate, checkState, content);
    const newcontent = content.map((o) => o);
    const checkvaluearr = Object.values(checkState);
    const data = {
      customerId,
      inputDate,
      newcontent,
      checkvaluearr,
    };
    dispatch(sandArrivallistData(data));
  };
  return (
    <form
      className={styles.frame}
      onSubmit={(e) => {
        submitHandler();
        e.preventDefault();
      }}
    >
      <div className={styles.div1}>
        <CustomerDataEdit></CustomerDataEdit>
        <CheckBoxesEdit></CheckBoxesEdit>
      </div>
      {ctx.content.map((item, i, arr) => {
        let isbtn = true;
        if (i + 1 < arr.length) {
          isbtn = false;
        }
        return <GoodsEdit key={i} keys={i} isbtn={isbtn}></GoodsEdit>;
      })}
      <div className={styles.buttonDiv}>
        <button
          type="button"
          className={styles.checkBtn}
          onClick={() => {
            ctx.setclear(true);
            ctx.setcontent([]);
            dispatch(confirmmodalActions.show());
            dispatch(backdropActions.show());
          }}
        >
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          清空
        </button>
        <button className={styles.modifyBtn} disabled={!ctx.inputvalid}>
          <FontAwesomeIcon icon={faPen} className={styles.modifyBtn_icon} />
          送出
        </button>
      </div>
    </form>
  );
}
export default AddArrivalItem;
//==在setState function中，假如改變其他元件的State，則會跳出不正常渲染警告
