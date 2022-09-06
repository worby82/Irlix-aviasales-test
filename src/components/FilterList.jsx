import { useState } from "react";

import FilterItem from "./FilterItem";

import { filterList } from "../utils/bem";
import "../css/filter-list.css"

const FilterList = ({ tickets, setFilterTickets, stop }) => {
    const [filterValue, setFilterValue] = useState([]);

    const filterArray = [
        { name: 'Самый дешевый', value: 'all' },
        { name: 'Без пересадок', value: '0' },
        { name: '1 пересадка', value: '1' },
        { name: '2 пересадки', value: '2' },
        { name: '3 пересадки', value: '3' }
    ];

    return (
        <ul className={filterList()}>
            {
                filterArray.map(item => {
                    return <FilterItem
                        key={item.value}
                        value={item.value}
                        text={item.name}

                        tickets={tickets}
                        setFilterTickets={setFilterTickets}
                        stop={stop}
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                    />
                })
            }
        </ul>
    );
}

export default FilterList;