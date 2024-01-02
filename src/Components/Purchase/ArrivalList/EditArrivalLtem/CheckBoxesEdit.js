import styles from './CheckBoxesEdit.module.css'
import { useContext } from 'react'
import AddArrivalItem_context from '../../../../Context/AddArrivalItem_context'
import { useDispatch } from 'react-redux'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
function CheckBoxesEdit(props) {
  const dispatch = useDispatch()

  //* setchecked
  function setChecked(e) {
    const inputChecked = e.target.checked
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'checkboxes',
        value: inputChecked
      })
    )
  }
  return (
    <div className={styles.frame}>
      <label htmlFor="transcribeweight">
        <input
          type="checkbox"
          id="transcribeweight"
          checked={props.checkvaluearr[0]}
          onChange={setChecked}
        ></input>
        抄重量
      </label>
      <label htmlFor="mixpallet">
        <input
          type="checkbox"
          id="mixpallet"
          checked={props.checkvaluearr[1]}
          onChange={setChecked}
        ></input>
        混合板
      </label>
      <label htmlFor="classifyexpiry">
        <input
          type="checkbox"
          id="classifyexpiry"
          checked={props.checkvaluearr[2]}
          onChange={setChecked}
        ></input>
        分效期
      </label>
    </div>
  )
}
export default CheckBoxesEdit
