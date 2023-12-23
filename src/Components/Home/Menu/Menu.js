import Userinfo from './Userinfo'
import Logo from './Logo'
import styles from './Menu.module.css'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
  return (
    <div className={styles.frame}>
      <Logo></Logo>
      <div className={styles.menuLink}>
        <NavLink
          to={'/purchase'}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          進貨管理
        </NavLink>
        <Link to={'/stock'}>庫存管理</Link>
        <Link to={'/ship'}>出貨管理</Link>
        <Link to={'/client'}>客戶管理</Link>
        <Link to={'/user'}>用戶管理</Link>
      </div>
      <Userinfo></Userinfo>
    </div>
  )
}
export default Menu
