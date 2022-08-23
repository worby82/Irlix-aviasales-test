import { buttonLoading } from "../utils/bem";
import "../css/button-loading.css"

const ButtonLoading = ({ setTicketCount }) => {
    return (
        <button className={buttonLoading()} onClick={() => setTicketCount(prev => prev + 5)}>Показать еще 5 билетов!</button>
    );
}

export default ButtonLoading;