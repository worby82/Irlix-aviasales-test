import { useDispatch } from "react-redux";
import { changeFilter } from "../store/actions";

import { checkbox } from "../utils/bem";
import "../css/checkbox.css"

const Checkbox = ({ name, value, text }) => {
    const dispatch = useDispatch();

    return (
        <label className={checkbox()}>
            <input className={checkbox('input')} type="checkbox" name={name} value={value} onChange={() => dispatch(changeFilter(value))} />{text}
        </label>
    )
}

export default Checkbox;