import TabItem from "./TabItem"

import { tabList } from "../utils/bem";
import "../css/tab-list.css"

const TabList = () => {

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
                        value={item.value}
                        name={item.name}
                    />
                })
            }
        </div>
    )
}

export default TabList;