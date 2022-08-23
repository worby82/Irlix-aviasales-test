import { filterItem } from "../utils/bem";
import "../css/filter-item.css"

import Checkbox from "./Checkbox";

const FilterItem = ({ value, text, changeFilter }) => {
    return (
        <li className={filterItem()}><Checkbox name='filter' value={value} text={text} changeFilter={changeFilter} /></li>
    );
}

export default FilterItem;