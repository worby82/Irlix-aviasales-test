import { tabItem } from "../utils/bem";
import "../css/tab-item.css"

const TabItem = ({ name, value, classes }) => {
    return (
        <button className={tabItem({ active: classes })} key={value} onClick={() => value}>{name}</button>
    )
}

export default TabItem;