import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTickets } from "../store/actions";

import Checkbox from "./Checkbox";

import { filterItem } from "../utils/bem";
import "../css/filter-item.css"

const FilterItem = ({ value, text, tickets, stop }) => {
    const dispatch = useDispatch();

    const filterValue = useSelector(state => state.filterValue);

    useEffect(() => {
        if (stop === true) {
            dispatch(filterTickets({ filterValue, tickets }))
        }
    }, [stop, filterValue])

    return (
        <li className={filterItem()}><Checkbox name='filter' value={value} text={text} /></li>
    );
}

export default FilterItem;