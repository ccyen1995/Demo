import styles from './GoodsEdit.module.css'
import { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import EditArrivalItemModal_context from '../../../../Context/EditArrivalItemModal_context'
import { useDispatch } from 'react-redux'
import { arrivallistdataActions } from '../../../../Store/slices/arrivallistdata_slice'
function GoodsEdit(props) {
  const ctx = useContext(EditArrivalItemModal_context)
  const dispatch = useDispatch()
  const [ndata, setndata] = useState({
    order: props.item.order || props.keys,
    mainname: props.item.mainname,
    subname: props.item.subname,
    amount: props.item.amount
  })
  //* 拿到輸入值
  function getValues(e) {
    setndata((p) => {
      const idd = e.target.attributes.idd.value
      const value = e.target.value
      if (idd === 'amount') {
        const val = parseInt(value) || 0
        // ==parseInt()可以直接用來過濾掉非數字的值
        p[idd] = val
      } else {
        p[idd] = value
      }
      p.order = props.keys
      return { ...p }
    })
  }
  // !console.js:213 Warning: A component is changing an uncontrolled input to be controlled.
  useEffect(() => {
    //* 改變到貨陣列
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'goods',
        value: {
          order: ndata.order,
          data: {
            order: ndata.order,
            mainname: ndata.mainname,
            subname: ndata.subname,
            amount: ndata.amount
          }
        }
      })
    )
    //* 判斷是否有效
    if (ndata.mainname && ndata.amount) {
      ctx.setinputvalid(true)
    } else {
      ctx.setinputvalid(false)
    }
  }, [ndata])
  function deletelistitem() {
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'deletelistitem',
        value: ndata.order
      })
    )
  }
  function addlistitem() {
    dispatch(
      arrivallistdataActions.editListdata({
        type: 'addlistitem',
        value: null
      })
    )
  }
  return (
    <div className={styles.frame}>
      {!props.isbtn || (
        <button className={styles.minusBtn} onClick={deletelistitem}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
      )}
      {!props.isbtn || (
        <button className={styles.plusBtn} onClick={addlistitem}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
      <div className={styles.space}></div>
      <div className={styles.goodsData}>
        <span>{props.keys < 9 ? '0' + (props.keys + 1) : props.keys + 1}</span>
        <input
          type="text"
          onChange={(e) => {
            getValues(e)
          }}
          value={ndata.mainname}
          idd="mainname"
          required
        ></input>
        <input
          type="text"
          onChange={(e) => {
            getValues(e)
          }}
          value={ndata.subname}
          // eslint-disable-next-line react/no-unknown-property
          idd="subname"
        ></input>
        <input
          type="text"
          onChange={(e) => {
            getValues(e)
          }}
          value={ndata.amount ? ndata.amount : ''}
          idd="amount"
          required
        ></input>
        <span>件</span>
      </div>
    </div>
  )
}
export default GoodsEdit
// ==可以在eventHandler中創建所需要的資料及其形態，而不是在handler之外先創造一個空物件，這樣才不會訪問外部變數造成sideEffect
// ==並在之後清除input，使用雙向綁定(將input的value attribute綁定為state值，這樣除了在輸入時監聽input的值並改變state之外，還將更新的值直接植入到input的value)
