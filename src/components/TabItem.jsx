import { tabItem } from "../utils/bem";
import "../css/tab-item.css"

const TabItem = ({ name, value, classes, sorting }) => {
    return (
        <button className={tabItem({ active: classes })} key={value} onClick={() => sorting(value)}>{name}</button>
    )
}

export default TabItem;