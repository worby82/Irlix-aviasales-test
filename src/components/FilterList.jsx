import FilterItem from "./FilterItem";

import filterArray from "../utils/filterArray";
import { filterList } from "../utils/bem";
import "../css/filter-list.css"

const FilterList = ({ tickets, stop }) => {
    return (
        <ul className={filterList()}>
            {
                filterArray.map(item => {
                    return <FilterItem
                        key={item.value}
                        value={item.value}
                        text={item.name}

                        tickets={tickets}
                        stop={stop}
                    />
                })
            }
        </ul>
    );
}

export default FilterList;