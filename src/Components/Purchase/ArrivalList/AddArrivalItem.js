import { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styles from './AddArrivalItem.module.css'
// ==component
import GoodsEdit from './GoodsEdit'
import CustomerDataEdit from './CustomerDataEdit'
import CheckBoxesEdit from './CheckBoxesEdit'
// ==icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
// ==state
import AddArrivalItem_context from '../../../Context/AddArrivalItem_context'
import { confirmmodalActions } from '../../../Store/slices/confirmmodal_slice'
import { backdropActions } from '../../../Store/slices/backdrop_slice'
import { sandArrivallistData } from '../../../Store/actions/senddata_actions'
import { arrivallistdataActions } from '../../../Store/slices/arrivallistdata_slice'
function AddArrivalItem() {
  const dispatch = useDispatch()
  const ctx = useContext(AddArrivalItem_context)

  //* 拿到資料並新增至"到貨列表"的陣列(arrivallist)中
  const submitHandler = () => {
    const { content, checkState, inputDate, customerId } = ctx
    const newcontent = content.map((o) => o)
    const checkvaluearr = Object.values(checkState)
    const newinputDate = JSON.stringify(inputDate)

    const data = {
      customerId,
      newinputDate,
      newcontent,
      checkvaluearr
    }
    dispatch(sandArrivallistData({ data, extra: '' }))
  }

  const clearHandler = () => {
    dispatch(confirmmodalActions.show())
    dispatch(backdropActions.show())
    dispatch(confirmmodalActions.switch({ switch: 'clearInput' }))
  }
  return (
    <form
      className={styles.frame}
      onSubmit={(e) => {
        submitHandler()
        e.preventDefault()
      }}
    >
      <div className={styles.div1}>
        <CustomerDataEdit></CustomerDataEdit>
        <CheckBoxesEdit></CheckBoxesEdit>
      </div>
      {ctx.content.map((item, i, arr) => {
        let isbtn = true
        if (i + 1 < arr.length) {
          isbtn = false
        }
        return <GoodsEdit key={i} keys={i} isbtn={isbtn}></GoodsEdit>
      })}

      <div className={styles.buttonDiv}>
        <button
          type="button"
          className={styles.checkBtn}
          onClick={clearHandler}
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
  )
}
export default AddArrivalItem
// ==在setState function中，假如改變其他元件的State，則會跳出不正常渲染警告
