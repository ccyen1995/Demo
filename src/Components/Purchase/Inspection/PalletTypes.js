import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function PalletTypes(props) {
  return (
    <button>
      {props.value}
      <FontAwesomeIcon icon={faPlus} />
    </button>
  )
}
export default PalletTypes
