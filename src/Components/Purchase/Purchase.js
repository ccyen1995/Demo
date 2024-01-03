import styles from './Purchase.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'

// ==component
import ArrivalList from './ArrivalList/ArrivalList'
import AddArrivalItem from './ArrivalList/AddArrivalItem'
import EditArrivalItemModal from './ArrivalList/EditArrivalLtem/EditArrivalItemModal'
import CheckModal from '../UI/CheckModal'

// ==state
import { AddArrivalItem_context_Provider } from '../../Context/AddArrivalItem_context'
import { EditArrivalItemModal_context_Provider } from '../../Context/EditArrivalItemModal_context'

function Purchase() {
  const confirmmodalState = useSelector((state) => state.confirmmodal.show)
  const editState = useSelector((state) => state.arrivallistdata.editing)
  return (
    <div className={styles.purchase}>
      <EditArrivalItemModal_context_Provider>
        {editState ? <EditArrivalItemModal></EditArrivalItemModal> : null}
      </EditArrivalItemModal_context_Provider>
      <AddArrivalItem_context_Provider>
        {confirmmodalState ? <CheckModal></CheckModal> : null}
        <ArrivalList></ArrivalList>
        <AddArrivalItem></AddArrivalItem>
      </AddArrivalItem_context_Provider>
    </div>
  )
}
export default Purchase
