import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import styles from "./Home.module.css"

import Menu from "./Menu/Menu"
import Backdrop from "../UI/Backdrop"

function Home() {
  const backdropState = useSelector((state) => state.backdrop)

  return (
    <div className={styles.home}>
      {backdropState ? <Backdrop></Backdrop> : null}
      {/* <CheckModal></CheckModal> */}
      <Menu></Menu>
      <Outlet></Outlet>
    </div>
  )
}
export default Home
