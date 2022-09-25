import { useDispatch } from "react-redux";
import { changeFilter } from "../store/actions";

import { checkbox } from "../utils/bem";
import "../css/checkbox.css"
import { useCallback } from "react";

const Checkbox = ({ name, value, text }) => {
    const dispatch = useDispatch();

    const memoizedChageFilter = useCallback(
        () => {
            dispatch(changeFilter(value))
        },
        [dispatch, value],
    );

    return (
        <label className={checkbox()}>
            <input className={checkbox('input')} type="checkbox" name={name} value={value} onChange={memoizedChageFilter} />{text}
        </label>
    )
}

export default Checkbox;