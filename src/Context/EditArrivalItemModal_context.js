import { createContext, useState } from 'react'
const EditArrivalItemModal_context = createContext({})

export const EditArrivalItemModal_context_Provider = (props) => {
  const [inputvalid, setinputvalid] = useState(false)

  return (
    <EditArrivalItemModal_context.Provider
      value={{ inputvalid, setinputvalid }}
    >
      {props.children}
    </EditArrivalItemModal_context.Provider>
  )
}
export default EditArrivalItemModal_context
