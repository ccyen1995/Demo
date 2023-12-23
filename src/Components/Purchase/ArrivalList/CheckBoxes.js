import styles from './CheckBoxes.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function CheckBoxes(props) {
  return (
    <div className={styles.frame}>
      {props.checks[0] ? (
        <div>
          <FontAwesomeIcon icon={faCheck} />
          <span>抄重量</span>
        </div>
      ) : null}
      {props.checks[1] ? (
        <div>
          <FontAwesomeIcon icon={faCheck} />
          <span>混合板</span>
        </div>
      ) : null}
      {props.checks[2] ? (
        <div>
          <FontAwesomeIcon icon={faCheck} />
          <span>分效期</span>
        </div>
      ) : null}
    </div>
  )
}

export default CheckBoxes
