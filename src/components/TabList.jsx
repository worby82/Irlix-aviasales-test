import TabItem from "./TabItem"

import tabArray from "../utils/tabArray";
import { tabList } from "../utils/bem";
import "../css/tab-list.css"

const TabList = () => {

    return (
        <div className={tabList()}>
            {
                tabArray.map((item, id) => {
                    return <TabItem
                        key={id}
                        value={item.value}
                        name={item.name}
                    />
                })
            }
        </div>
    )
}

export default TabList;