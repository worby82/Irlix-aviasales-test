import { filterList } from "../utils/bem";
import "../css/filter-list.css"

import FilterItem from "./FilterItem";

const FilterList = () => {
    return (
        <ul className={filterList()}>
            <FilterItem key="all" value='all' text='Все' />
            <FilterItem key="straight" value='straight' text='Без пересадок' />
            <FilterItem key="1" value='1' text='1 пересадка' />
            <FilterItem key="2" value='2' text='2 пересадки' />
            <FilterItem key="3" value='3' text='3 пересадки' />
        </ul>
    );
}

export default FilterList;