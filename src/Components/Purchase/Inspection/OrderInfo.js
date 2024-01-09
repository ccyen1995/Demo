import cls from './OrderInfo.module.css'
import { useSelector } from 'react-redux'

function OrderInfo() {
  const items = useSelector((s) => s.acceptanceList.items)
  const listInfo = useSelector((s) => s.acceptanceList.listInfo)
  return (
    <div className={cls.frame}>
      <div>
        <p>{listInfo.customerId}</p>
        <p>客戶名稱</p>
      </div>
      <div>
        <p>{listInfo.newinputDate}</p>
      </div>
    </div>
  )
}
export default OrderInfo
