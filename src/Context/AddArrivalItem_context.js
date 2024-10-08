import { createContext, useState, useEffect } from 'react'

const AddArrivalItem_context = createContext({})
// ==預設context的內容是提供給未用Provider元件包覆的元件需要此context的state時使用的
export const AddArrivalItem_context_Provider = (props) => {
  const [clear, setclear] = useState(false)
  const [content, setcontent] = useState([])
  const [customerId, setcustomerId] = useState('')
  const [inputDate, setinputDate] = useState(
    new Date().toLocaleDateString('en-CA')
  )
  const [ndatavalid, setndatavalid] = useState(false)
  const [inputvalid, setinputvalid] = useState(false)
  const [arrivallist, setarrivallist] = useState([])
  const [checkState, setcheckState] = useState({
    transcribeweight: false,
    mixpallet: false,
    classifyexpiry: false
  })
  //* 新增到貨品項
  function addlistitem() {
    //* 加入到陣列
    setcontent((p) => {
      return [...p, '']
    })
  }
  //* 刪除到貨品項
  function deletelistitem() {
    //* 陣列內刪除
    setcontent((p) => {
      p.pop()
      return [...p]
    })
  }
  if (content.length === 0) {
    addlistitem()
  }
  useEffect(() => {
    setclear(false)
    // ==只要useEffect中有觸發setState，就會使元件在跑一次，假如狀態一樣則不重新選染
    if (customerId.length === 3 && ndatavalid) {
      setinputvalid(true)
    } else {
      setinputvalid(false)
    }
  }, [customerId, ndatavalid])
  return (
    <AddArrivalItem_context.Provider
      value={{
        clear,
        setclear,
        content,
        setcontent,
        checkState,
        setcheckState,
        customerId,
        setcustomerId,
        inputDate,
        setinputDate,
        addlistitem,
        deletelistitem,
        setndatavalid,
        inputvalid,
        arrivallist,
        setarrivallist
      }}
    >
      {props.children}
    </AddArrivalItem_context.Provider>
  )
}

export default AddArrivalItem_context

// ==export { AddArrivalItem_context_Provider };也可以

// ==產生新物件(new reference)就會跳出不正常渲染警告
// ==維持舊物件(origin reference)不會跳出警告，但是同樣也不會重新渲染元件，因此無法使送出按鈕的狀態更新
