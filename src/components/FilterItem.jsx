import { useEffect } from "react";

import Checkbox from "./Checkbox";

import { filterItem } from "../utils/bem";
import "../css/filter-item.css"

const FilterItem = ({ value, text, tickets, setFilterTickets, stop, filterValue, setFilterValue }) => {

    useEffect(() => {
        if (stop === true) {
            if (filterValue.includes('all') === false & filterValue.length > 0) {
                setFilterTickets([...tickets.filter(itemFilter =>
                    filterValue.includes(String(itemFilter.segments[0].stops.length))
                    & filterValue.includes(String(itemFilter.segments[1].stops.length))
                )])
            } else {
                setFilterTickets([...tickets]);
            }
        }
    }, [stop, filterValue])

    const changeFilter = (value) => {
        if (!filterValue.includes(value)) {
            setFilterValue([...filterValue, value]);
        } else {
            const copyFilterValue = [...filterValue];
            copyFilterValue.splice(copyFilterValue.indexOf(value), 1)
            setFilterValue(copyFilterValue);
        }
    }

    return (
        <li className={filterItem()}><Checkbox name='filter' value={value} text={text} changeFilter={changeFilter} /></li>
    );
}

export default FilterItem;