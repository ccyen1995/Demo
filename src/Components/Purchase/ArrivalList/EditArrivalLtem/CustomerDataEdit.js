import AddArrivalItem_context from '../../../../Context/AddArrivalItem_context'
import styles from './CustomerDataEdit.module.css'
import { useContext, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
const reducerfc = (state, action) => {
  state[action.type] = action.val
  return { ...state }
}

function CustomerData(props) {
  const dispatch = useDispatch()

  const date = props.newinputDate
  const [inputstate, dispatchinputstate] = useReducer(reducerfc, {
    firsttype: true,
    isanyword: false,
    long: true
  })
  //* 改變customerid欄位
  function setid(e) {
    const value = e.target.value
    if ((/^\d+$/.test(value) && value.length < 4) || value === '') {
      dispatch(
        arrivallistdataActions.editListdata({ type: 'customerId', value })
      )
      dispatchinputstate({ type: 'isanyword', val: true })
    }
    if (e.target.value === '') {
      dispatchinputstate({ type: 'isanyword', val: false })
      dispatchinputstate({ type: 'long', val: false })
    }
  }

  //* 清除customerid欄位，回歸到空值6
  function clearid() {
    if (inputstate.firsttype) {
      dispatchinputstate({ type: 'long', val: false })
      dispatchinputstate({ type: 'firsttype', val: false })
    }
  }
  //* 裡面有字嗎?
  function anyword(e) {
    if (e.target.value === '') {
      dispatchinputstate({ type: 'isanyword', val: false })
    }
    if (!inputstate.isanyword) {
      dispatchinputstate({ type: 'firsttype', val: true })
      dispatchinputstate({ type: 'long', val: true })
    }
  }
  //* 改變日期
  function changeDate(e) {
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'newinputDate',
        value: e.target.value
      })
    )
  }
  return (
    <div className={styles.frame}>
      <div>
        <label htmlFor="CustomerData_CustomerId">客戶代號</label>
        <div>
          <span>E -</span>
          <input
            type="text"
            id="CustomerData_CustomerId"
            value={props.customerId}
            onChange={setid}
            onClick={clearid}
            onBlur={anyword}
            placeholder={!inputstate.long ? '' : '請輸入'}
            className={
              inputstate.isanyword || !inputstate.long ? styles.opp : styles.op
            }
          ></input>
        </div>
      </div>
      <div>
        <p>客戶名稱</p>
        <p>自動帶入</p>
      </div>
      <div>
        <label htmlFor="CustomerData_Date">入庫日期</label>
        <input
          value={date}
          min={'2020-01-01'}
          max={'2099-12-31'}
          type="date"
          id="CustomerData_Date"
          onChange={changeDate}
        ></input>
      </div>
    </div>
  )
}
export default CustomerData
