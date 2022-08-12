import { checkbox } from "../utils/bem";
import "../css/checkbox.css"

const Checkbox = ({ name, value, text }) => {
    return (
        <label className={checkbox()}>
            <input className={checkbox('input')} type="checkbox" name={name} value={value} />{text}
        </label>
    )
}

export default Checkbox;