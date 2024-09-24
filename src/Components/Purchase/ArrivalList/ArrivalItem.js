import { useContext } from "react"
import styles from "./ArrivalItem.module.css"
import CustomerData from "./CustomerData"
import CheckBoxes from "./CheckBoxes"
import Goods from "./Goods"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from "react-redux"
import { confirmmodalActions } from "../../../Store/slices/confirmmodal_slice"
import { backdropActions } from "../../../Store/slices/backdrop_slice"
import { arrivallistdataActions } from "../../../Store/slices/arrivallistdata_slice"
import { acceptanceListActions } from "../../../Store/slices/acceptance_slice"

// *元件開始
function ArrivalItem({ keys, data }) {
  const dispatch = useDispatch()
  const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
    data
  function deleteListItem(keys) {
    dispatch(confirmmodalActions.show())
    dispatch(backdropActions.show())
    dispatch(
      confirmmodalActions.switch({
        switch: "deletelistitem",
        extra: { keys, newinputDate },
      })
    )
  }
  function acceptance(d) {
    dispatch(acceptanceListActions.importData(d))
    dispatch(acceptanceListActions.show())
  }
  function editListitem() {
    dispatch(arrivallistdataActions.editListdata({ type: "data", value: data }))
    dispatch(backdropActions.show())
    // ==以下嘗試與AddArrivalItem共用相同的context
    // ==也使用相同的原件，似乎做不到，也不符合UX，放棄
    // const converCheckvalue = {
    //   transcribeweight: checkvaluearr[0],
    //   mixpallet: checkvaluearr[1],
    //   classifyexpiry: checkvaluearr[2]
    // }
    // ctx.setcustomerId(data.customerId)
    // ctx.setinputDate(new Date(data.newinputDate.substr(1, 24)))
    // ctx.setcheckState(converCheckvalue)
    // ?原本n的reference似乎與某個ndata產生連結，需要deep clone才不會發生狀況
    // ?ctx.setcontent(n) ==>不行
    // ctx.setcontent(JSON.parse(JSON.stringify(n))) // * ==>可以
  }
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerData
          order={keys}
          id={customerId}
          date={newinputDate}
        ></CustomerData>
        <CheckBoxes checks={checkvaluearr}></CheckBoxes>
      </div>
      {newcontent.map((data, i, arr) => {
        return <Goods key={i} data={data}></Goods>
      })}
      <div className={styles.buttonDiv}>
        <button
          className={styles.checkBtn}
          onClick={() => {
            acceptance(data)
          }}
        >
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          驗收
        </button>
        <button
          className={styles.modifyBtn}
          onClick={() => {
            editListitem(newcontent)
          }}
        >
          <FontAwesomeIcon icon={faPen} className={styles.modifyBtn_icon} />
          修改
        </button>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => {
          deleteListItem(timestamp)
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}
export default ArrivalItem
