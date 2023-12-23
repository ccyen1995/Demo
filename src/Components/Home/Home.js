import Menu from './Menu/Menu'
import styles from './Home.module.css'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div className={styles.home}>
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  )
}
export default Home
