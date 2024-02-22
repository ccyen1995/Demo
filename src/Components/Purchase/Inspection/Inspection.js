import cls from './Inspection.module.css'
import OrderInfo from './OrderInfo'
import Goods from './Goods'
import { useSelector } from 'react-redux'
import PalletTypes from './PalletTypes'
import Row_Inspection from './Row_Inspection'

function Inspection() {
  const items = useSelector((s) => s.acceptanceList.items)
  console.log(items)
  return (
    <div className={cls.frame}>
      <h2 className={cls.h11}>
        <span>驗貨中</span>
      </h2>
      <OrderInfo></OrderInfo>
      <ul>
        {items.map((i, d) => {
          return <Goods key={d} items={i}></Goods>
        })}
      </ul>
      <hr></hr>
      <h1>驗貨區</h1>
      <div>
        <PalletTypes value={'普通板'}></PalletTypes>
        <PalletTypes value={'效期板'}></PalletTypes>
        <PalletTypes value={'混和板'}></PalletTypes>
        <PalletTypes value={'抄重板'}></PalletTypes>
      </div>
      <div>
        <Row_Inspection items={items}></Row_Inspection>
      </div>
    </div>
  )
}

export default Inspection
