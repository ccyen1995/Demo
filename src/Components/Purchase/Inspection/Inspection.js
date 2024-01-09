import cls from './Inspection.module.css'
import OrderInfo from './OrderInfo'
import Goods from './Goods'

function Inspection() {
  return (
    <div className={cls.frame}>
      <h2 className={cls.h11}>
        <span> 驗貨中</span>
      </h2>
      <OrderInfo></OrderInfo>
      <Goods></Goods>
      <h1>驗貨區</h1>
    </div>
  )
}

export default Inspection
