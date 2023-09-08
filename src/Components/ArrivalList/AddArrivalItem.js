import styles from "./AddArrivalItem.module.css";
import { useContext } from "react";
import GoodsEdit from "./GoodsEdit";
import CustomerDataEdit from "./CustomerDataEdit";
import CheckBoxesEdit from "./CheckBoxesEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import AddArrivalItem_context from "../../Context/AddArrivalItem_context";
import { confirmmodalActions } from "../../Store/confirmmodal_slis";
import { backdropActions } from "../../Store/backdrop_slis";
import { useDispatch } from "react-redux";

function AddArrivalItem(props) {
  const ctx = useContext(AddArrivalItem_context);
  const dispatch = useDispatch();
  return (
    <form
      className={styles.frame}
      onSubmit={(e) => {
        props.getdata(
          ctx.customerId,
          ctx.inputDate,
          ctx.checkState,
          ctx.content
        );
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
