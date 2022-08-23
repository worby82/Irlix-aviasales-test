import { tabList } from "../utils/bem";
import "../css/tab-list.css"

import TabItem from "./TabItem"

const TabList = ({ activeTab, sorting }) => {
    const tabArray = [
        { name: 'Самый дешевый', value: 'minPrice' },
        { name: 'Самый быстрый', value: 'fast' },
        { name: 'Оптимальный', value: 'optimal' }
    ];

    return (
        <div className={tabList()}>
            {
                tabArray.map(item => {
                    return <TabItem
                        key={item.value}
                        classes={item.value === activeTab}
                        sorting={sorting}
                        value={item.value}
                        name={item.name}
                    />
                })
            }
        </div>
    )
}

export default TabList;