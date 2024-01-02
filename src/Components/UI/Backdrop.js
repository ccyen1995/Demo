import classes from './Backdrop.module.css'
import { backdropActions } from '../../Store/slices/backdrop_slice'
import { useDispatch } from 'react-redux'
import { arrivallistdataActions } from '../../Store/slices/arrivallistdata_slice'
import { confirmmodalActions } from '../../Store/slices/confirmmodal_slice'
const Backdrop = () => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    dispatch(backdropActions.hide())
    dispatch(arrivallistdataActions.editfalse())
    dispatch(confirmmodalActions.hide())
  }
  return <div className={classes.backdrop} onClick={clickHandler}></div>
}

export default Backdrop
