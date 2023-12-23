import styles from './Purchase.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

// ==component
import ArrivalList from './ArrivalList/ArrivalList'
import AddArrivalItem from './ArrivalList/AddArrivalItem'
// ==UI
import Backdrop from '../UI/Backdrop'
import CheckModal from '../UI/CheckModal'
import Notification from '../UI/Notification'
// ==state
import { AddArrivalItem_context_Provider } from '../../Context/AddArrivalItem_context'
import { uiActions } from '../../Store/ui_slice'

function Purchase() {
  const backdropState = useSelector((state) => state.backdrop)
  const confirmmodalState = useSelector((state) => state.confirmmodal.show)
  const uiState = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   //*等動畫跑完再讓提示方塊消失
  //   setTimeout(() => {
  //     dispatch(uiActions.hide());
  //   }, 1200);
  // }, [uiState.show]);
  return (
    <div className={styles.purchase}>
      {uiState.show ? (
        <Notification res={uiState.notification}></Notification>
      ) : null}
      {backdropState ? <Backdrop></Backdrop> : null}
      <ArrivalList></ArrivalList>
      <AddArrivalItem_context_Provider>
        {confirmmodalState ? <CheckModal></CheckModal> : null}
        <AddArrivalItem></AddArrivalItem>
      </AddArrivalItem_context_Provider>
    </div>
  )
}
export default Purchase
