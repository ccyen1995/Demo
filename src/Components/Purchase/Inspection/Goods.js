function Goods({ items }) {
  return (
    <li>
      <span>{items.order + 1}</span>
      <span>名稱:{items.mainname}</span>
      <span>次名稱:{items.subname}</span>
      <span>數量:{items.amount}</span>
    </li>
  )
}

export default Goods
