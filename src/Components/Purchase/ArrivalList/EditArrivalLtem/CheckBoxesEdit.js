import styles from './CheckBoxesEdit.module.css'
import { useContext } from 'react'

import { useDispatch } from 'react-redux'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
function CheckBoxesEdit({ checkvaluearr }) {
  const dispatch = useDispatch()
  const checkarr = [...checkvaluearr]
  // console.log(checkarr[0])

  //* setchecked
  function setChecked(e) {
    const inputChecked = e.target.checked
    const inputid = e.target.id
    let n
    switch (inputid) {
      case 'transcribeweight':
        n = 0
        break
      case 'mixpallet':
        n = 1
        break
      case 'classifyexpiry':
        n = 2
        break
    }
    checkarr[n] = inputChecked
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'checkboxes',
        value: checkarr
      })
    )
  }
  return (
    <div className={styles.frame}>
      <label htmlFor="transcribeweight">
        <input
          type="checkbox"
          id="transcribeweight"
          checked={checkarr[0]}
          onChange={setChecked}
        ></input>
        抄重量
      </label>
      <label htmlFor="mixpallet">
        <input
          type="checkbox"
          id="mixpallet"
          checked={checkarr[1]}
          onChange={setChecked}
        ></input>
        混合板
      </label>
      <label htmlFor="classifyexpiry">
        <input
          type="checkbox"
          id="classifyexpiry"
          checked={checkarr[2]}
          onChange={setChecked}
        ></input>
        分效期
      </label>
    </div>
  )
}
export default CheckBoxesEdit
