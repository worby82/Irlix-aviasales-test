import { checkbox } from "../utils/bem";
import "../css/checkbox.css"

const Checkbox = ({ name, value, text, changeFilter }) => {
    return (
        <label className={checkbox()}>
            <input className={checkbox('input')} type="checkbox" name={name} value={value} onChange={() => changeFilter(value)} />{text}
        </label>
    )
}

export default Checkbox;