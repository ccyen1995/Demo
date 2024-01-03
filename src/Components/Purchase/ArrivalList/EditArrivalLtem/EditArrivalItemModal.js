import styles from './EditArrivalItemModal.module.css'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
import { backdropActions } from '../../../../Store/slices/backdrop_slice'
import { useDispatch, useSelector } from 'react-redux'
import GoodsEdit from './GoodsEdit'
import CustomerDataEdit from './CustomerDataEdit'
import CheckBoxesEdit from './CheckBoxesEdit'
import { useState, useContext } from 'react'
import EditArrivalItemModal_context from '../../../../Context/EditArrivalItemModal_context'

function EditArrivalItemModal() {
  const dispatch = useDispatch()
  const ctx = useContext(EditArrivalItemModal_context)
  const data = useSelector((s) => s.arrivallistdata.editItam)
  // console.log(data)
  console.log(ctx.inputvalid)

  const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
    data
  const converCheckvalue = {
    transcribeweight: checkvaluearr[0],
    mixpallet: checkvaluearr[1],
    classifyexpiry: checkvaluearr[2]
  }

  function cancelHandler() {
    dispatch(arrivallistdataActions.editfalse())
    dispatch(backdropActions.hide())
  }

  function deletelistitem() {}
  function addlistitem() {}
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
          <GoodsEdit
            key={i}
            keys={i}
            isbtn={isbtn}
            item={item}
            deletelistitem={deletelistitem}
            addlistitem={addlistitem}
          ></GoodsEdit>
        )
      })}
      <div className={styles.btndiv}>
        <button onClick={cancelHandler}>取消</button>
        <button disabled={!ctx.inputvalid}>送出</button>
      </div>
    </div>
  )
}

export default EditArrivalItemModal
