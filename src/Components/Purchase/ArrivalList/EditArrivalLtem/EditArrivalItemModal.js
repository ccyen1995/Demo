import styles from './EditArrivalItemModal.module.css'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
import { backdropActions } from '../../../../Store/slices/backdrop_slice'
import { useDispatch, useSelector } from 'react-redux'
import GoodsEdit from './GoodsEdit'
import CustomerDataEdit from './CustomerDataEdit'
import CheckBoxesEdit from './CheckBoxesEdit'

function EditArrivalItemModal() {
  const dispatch = useDispatch()
  const data = useSelector((s) => s.arrivallistdata.editItam)
  console.log(data)

  const { checkvaluearr, customerId, newinputDate, newcontent, timestamp } =
    data
  const converCheckvalue = {
    transcribeweight: checkvaluearr[0],
    mixpallet: checkvaluearr[1],
    classifyexpiry: checkvaluearr[2]
  }
  console.log(checkvaluearr)

  function cancelHandler() {
    dispatch(arrivallistdataActions.editListdata({ editing: false }))
    dispatch(backdropActions.hide())
  }
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerDataEdit></CustomerDataEdit>
        <CheckBoxesEdit></CheckBoxesEdit>
      </div>
      {newcontent.map((item, i, arr) => {
        let isbtn = true
        if (i + 1 < arr.length) {
          isbtn = false
        }
        return <GoodsEdit key={i} keys={i} isbtn={isbtn}></GoodsEdit>
      })}
      <div className={styles.btndiv}>
        <button onClick={cancelHandler}>取消</button>
        <button>送出</button>
      </div>
    </div>
  )
}

export default EditArrivalItemModal
