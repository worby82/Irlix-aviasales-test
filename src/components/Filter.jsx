import { filter } from "../utils/bem";
import "../css/filter.css"

const Filter = (props) => {
    return (
        <aside className={filter()}>
            <p className={filter('text')}>Количество пересадок</p>
            {props.children}
        </aside>
    );
}

export default Filter;