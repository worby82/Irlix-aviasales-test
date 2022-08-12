import { filterItem } from "../utils/bem";
import "../css/filter-item.css"

import Checkbox from "./Checkbox";

const FilterItem = ({ value, text }) => {
    return (
        <li className={filterItem()}><Checkbox name='filter' value={value} text={text} /></li>
    );
}

export default FilterItem;