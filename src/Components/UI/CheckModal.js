import classes from './CheckModal.module.css'
import { confirmmodalActions } from '../../Store/slices/confirmmodal_slice'
import { backdropActions } from '../../Store/slices/backdrop_slice'
import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import AddArrivalItem_context from '../../Context/AddArrivalItem_context'
import { sandArrivallistData } from '../../Store/actions/senddata_actions'

const CheckModal = () => {
  const dispatch = useDispatch()
  const ctx = useContext(AddArrivalItem_context)
  const confirmstate = useSelector((s) => s.confirmmodal)

  function confirmHandler() {
    switch (confirmstate.connectSwitch) {
      case 'clearInput':
        ctx.setcheckState({
          transcribeweight: false,
          mixpallet: false,
          classifyexpiry: false
        })
        ctx.setinputDate(new Date().toLocaleDateString('en-CA'))
        ctx.setclear(true)
        ctx.setcustomerId('')
        ctx.setcontent([])

        break
      case 'deletelistitem':
        dispatch(
          sandArrivallistData({
            action: 'deletelistitem',
            data: confirmstate.extra
          })
        )

        break
    }
    dispatch(confirmmodalActions.hide())
    dispatch(backdropActions.hide())
  }
  function cancelHandler() {
    dispatch(confirmmodalActions.hide())
    dispatch(backdropActions.hide())
  }

  return (
    <div className={classes.frame}>
      <p>確定要{confirmstate.btnname}嗎?</p>
      <div className={classes.buttons}>
        <button className={classes.cancel} onClick={cancelHandler}>
          取消
        </button>
        <button className={classes.confirm} onClick={confirmHandler}>
          確定
        </button>
      </div>
    </div>
  )
}
export default CheckModal
