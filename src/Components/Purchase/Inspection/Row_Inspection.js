import { useState, useRef } from 'react'

function Row_Inspection({ items }) {
  const [singlePallet_amount, setsinglePallet_amount] = useState(0)
  const y = useRef()
  function setsinglePallet_amount_handler(e) {
    console.log(items)
    console.log(y.current)
    setsinglePallet_amount(e.target.value)
  }
  return (
    <div>
      <select onChange={() => {}}>
        {items.map((i, d) => {
          return <option key={d}>{`${i.mainname} -- ${i.subname}`}</option>
        })}
      </select>
      <div>
        <p>
          <label>單棧數:</label>
          <input
            ref={y}
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
