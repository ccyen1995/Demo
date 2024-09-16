import { useState, useRef } from 'react'

function Row_Inspection({ items }) {
  const [singlePallet_amount, setsinglePallet_amount] = useState(0)
  const selectref = useRef()
  function setsinglePallet_amount_handler(e) {
    console.log(items)
    setsinglePallet_amount(e.target.value)
  }
  function selectHandler() {
    console.log('hi')
    console.dir(selectref.current.selectedIndex)
  }
  return (
    <div>
      <select
        onChange={() => {
          selectHandler()
        }}
        ref={selectref}
      >
        {items.map((i, d) => {
          return <option key={d}>{`${i.mainname} -- ${i.subname}`}</option>
        })}
      </select>
      <div>
        <p>
          <label>單棧數:</label>
          <input
            type="number"
            value={singlePallet_amount || ''}
            onChange={setsinglePallet_amount_handler}
            max={20}
          />
          <span></span>
          <span>
            (共{20}板 + 尾數:{20})
          </span>
        </p>
      </div>
    </div>
  )
}
export default Row_Inspection
