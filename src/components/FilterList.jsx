import FilterItem from "./FilterItem";

import { filterList } from "../utils/bem";
import "../css/filter-list.css"

const FilterList = ({ tickets, setFilterTickets, stop }) => {
    return (
        <ul className={filterList()}>
            <FilterItem key="all" value='all' text='Все' tickets={tickets} setFilterTickets={setFilterTickets} stop={stop} />
            <FilterItem key="0" value='0' text='Без пересадок' tickets={tickets} setFilterTickets={setFilterTickets} stop={stop} />
            <FilterItem key="1" value='1' text='1 пересадка' tickets={tickets} setFilterTickets={setFilterTickets} stop={stop} />
            <FilterItem key="2" value='2' text='2 пересадки' tickets={tickets} setFilterTickets={setFilterTickets} stop={stop} />
            <FilterItem key="3" value='3' text='3 пересадки' tickets={tickets} setFilterTickets={setFilterTickets} stop={stop} />
        </ul>
    );
}

export default FilterList;