import FilterItem from "./FilterItem";

import { filterList } from "../utils/bem";
import "../css/filter-list.css"

const FilterList = ({ tickets, stop }) => {

    const filterArray = [
        { name: 'Все', value: 'all' },
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
                        stop={stop}
                    />
                })
            }
        </ul>
    );
}

export default FilterList;