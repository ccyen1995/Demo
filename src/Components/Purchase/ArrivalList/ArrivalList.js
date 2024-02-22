import { useState, useEffect } from 'react'
import styles from './ArrivalList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useLoaderData } from 'react-router-dom'
//= =component
import ArrivalItem from './ArrivalItem'
//= =icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
//= =state

import { arrivallistdataActions } from '../../../Store/slices/arrivallistdata_slice'

function ArrivalList() {
  const dispatch = useDispatch()
  //* loader載入資料
  const loaderdata = useLoaderData()

  const list = useSelector((s) => s.arrivallistdata.arrivallistdata)

  useEffect(() => {
    if (list.length === 0) {
      dispatch(arrivallistdataActions.converitem(loaderdata))
    }
  }, [])
  // ?不斷重複渲染
  //= ===
  //* 轉換資料結構
  function makenestdata(datas) {
    const nestlist = datas.map((data) => {
      const dateclass = Object.keys(data)[0]
      const renderdata = data[dateclass]
      return renderdata
    })
    return nestlist
  }
  let nestlist
  if (list.length === 0) {
    nestlist = makenestdata(loaderdata)
  } else {
    nestlist = makenestdata(list)
  }
  const correctData = nestlist.flat().map((it) => {
    const timestamp = Object.getOwnPropertyNames(it)[0]
    // console.log(Object.isExtensible(it));
    // ?為什麼不能夠加入屬性
    const newitem = JSON.parse(JSON.stringify(it))

    
    newitem[timestamp].timestamp = timestamp
    const h = Object.values(newitem)
    return h[0]
  })
  //* 篩選器ID
  const [selectedID, setselectedID] = useState('')
  const dataID = correctData.map((data) => data.customerId)
  //* 去除一樣的ID
  const set1 = [...new Set(dataID)].reverse()

  //* 設置篩選器內容
  function selectoroptionHandler(e) {
    if (e.target.value === '全選') {
      setselectedID('')
    } else {
      setselectedID(e.target.value.slice(1))
    }
  }
  //* 設置漏斗按鈕動畫
  const [filteranimate, setfilteranimate] = useState(true)
  function filteranimation() {
    setfilteranimate(!filteranimate)
  }
  return (
    <div className={styles.frame}>
      <div className={styles.innerFrame}>
        {correctData.map((data, i) => {
          if (selectedID === '' || data.customerId === selectedID) {
            return <ArrivalItem key={i} keys={i} data={data}></ArrivalItem>
          }
          return null
        })}
      </div>
      <div className={styles.filterSec}>
        <div
          className={`${styles.filterDiv} ${
            filteranimate ? '' : styles.filterDivact
          }`}
        >
          <label htmlFor="co">公司代號：</label>
          <select
            id="co"
            className={styles.filterSelect}
            onChange={selectoroptionHandler}
          >
            <option>{set1.length > 0 ? '全選' : '無'}</option>
            {set1.map((n, i) => (
              <option key={i}>{'E' + n}</option>
            ))}
          </select>
        </div>
        <button className={styles.filterBtn} onClick={filteranimation}>
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
  )
}
export default ArrivalList

export const ArrivalList_Loader = async () => {
  const sendRequest = async () => {
    const response = await fetch(
      'https://fir-ad5df-default-rtdb.firebaseio.com/arrivallist.json?'
    )

    if (!response.ok) {
      throw new Error('getting data failed.')
    }
    const data = await response.json()
    return data
  }
  let y

  try {
    const data = await sendRequest()
    if (data == null) return []
    // *轉為陣列
    y = Object.entries(data).map((it) => {
      const k = Object.entries(it[1]).map((itt) => {
        return { [itt[0]]: itt[1] }
      })
      return { [it[0]]: k }
    })
  } catch (error) {
    console.log(error)
  }
  return y
}
