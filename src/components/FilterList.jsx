import { filterList } from "../utils/bem";
import "../css/filter-list.css"

import FilterItem from "./FilterItem";

const FilterList = ({ changeFilter }) => {
    return (
        <ul className={filterList()}>
            <FilterItem key="all" value='all' text='Все' changeFilter={changeFilter} />
            <FilterItem key="0" value='0' text='Без пересадок' changeFilter={changeFilter} />
            <FilterItem key="1" value='1' text='1 пересадка' changeFilter={changeFilter} />
            <FilterItem key="2" value='2' text='2 пересадки' changeFilter={changeFilter} />
            <FilterItem key="3" value='3' text='3 пересадки' changeFilter={changeFilter} />
        </ul>
    );
}

export default FilterList;