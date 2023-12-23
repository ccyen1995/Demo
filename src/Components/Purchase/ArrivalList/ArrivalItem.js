import { useContext } from 'react'
import styles from './ArrivalItem.module.css'
import CustomerData from './CustomerData'
import CheckBoxes from './CheckBoxes'
import Goods from './Goods'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { confirmmodalActions } from '../../../Store/confirmmodal_slice'
import { backdropActions } from '../../../Store/backdrop_slice'
function ArrivalItem({ keys, data }) {
  const dispatch = useDispatch()
  const { checkvaluearr, customerId, inputDate, newcontent, timestamp } = data

  function deleteListItem(keys) {
    console.log(inputDate)
    dispatch(confirmmodalActions.show())
    dispatch(backdropActions.show())
    dispatch(
      confirmmodalActions.switch({
        switch: 'deletelistitem',
        extra: { keys, inputDate }
      })
    )
  }
  return (
    <div className={styles.frame}>
      <div className={styles.div1}>
        <CustomerData
          order={keys}
          id={customerId}
          date={inputDate}
        ></CustomerData>
        <CheckBoxes checks={checkvaluearr}></CheckBoxes>
      </div>
      {newcontent.map((data, i, arr) => {
        return <Goods key={i} data={data}></Goods>
      })}
      <div className={styles.buttonDiv}>
        <button className={styles.checkBtn}>
          <FontAwesomeIcon icon={faPen} className={styles.checkBtn_icon} />
          驗收
        </button>
        <button className={styles.modifyBtn}>
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
