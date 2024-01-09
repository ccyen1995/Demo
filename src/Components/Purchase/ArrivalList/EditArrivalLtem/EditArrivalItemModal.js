import styles from './EditArrivalItemModal.module.css'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
import { backdropActions } from '../../../../Store/slices/backdrop_slice'
import { useDispatch, useSelector } from 'react-redux'
import GoodsEdit from './GoodsEdit'
import CustomerDataEdit from './CustomerDataEdit'
import CheckBoxesEdit from './CheckBoxesEdit'
import { useState, useContext } from 'react'
import EditArrivalItemModal_context from '../../../../Context/EditArrivalItemModal_context'
import { sandEditlistData } from '../../../../Store/actions/senddata_actions'

function EditArrivalItemModal() {
  const dispatch = useDispatch()
  const ctx = useContext(EditArrivalItemModal_context)
  const data = useSelector((s) => s.arrivallistdata.editItam)
  const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
    data
  const [selecteddate, setselectdate] = useState(newinputDate)

  function cancelHandler() {
    dispatch(arrivallistdataActions.editfalse())
    dispatch(backdropActions.hide())
  }
  function submitEdititem(data, timestamp) {
    // *轉換unextainable物件
    const newdata = JSON.parse(JSON.stringify(data))
    delete newdata.timestamp

    // *刪除編輯前的項目
    // dispatch(
    //   arrivallistdataActions.deleteListdata({
    //     datakeys: timestamp,
    //     newinputDate: selecteddate
    //   })
    // )

    // *新增編輯後的項目
    dispatch(
      arrivallistdataActions.updateeditListdata({
        newdata,
        timestamp,
        selecteddate
      })
    )
    // *fetch後端
    dispatch(
      sandEditlistData({
        selecteddate,
        data: { checkvaluearr, customerId, newinputDate, newcontent },
        timestamp
      })
    )

    dispatch(arrivallistdataActions.editfalse())
    dispatch(backdropActions.hide())
  }

  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerDataEdit
          customerId={customerId}
          newinputDate={newinputDate}
        ></CustomerDataEdit>
        <CheckBoxesEdit checkvaluearr={checkvaluearr}></CheckBoxesEdit>
      </div>
      {newcontent.map((item, i, arr) => {
        let isbtn = true
        if (i + 1 < arr.length) {
          isbtn = false
        }
        return (
          <GoodsEdit key={i} keys={i} isbtn={isbtn} item={item}></GoodsEdit>
        )
      })}
      <div className={styles.btndiv}>
        <button onClick={cancelHandler}>取消</button>
        <button
          disabled={!ctx.inputvalid}
          onClick={() => {
            submitEdititem(data, timestamp)
          }}
        >
          送出
        </button>
      </div>
    </div>
  )
}

export default EditArrivalItemModal
