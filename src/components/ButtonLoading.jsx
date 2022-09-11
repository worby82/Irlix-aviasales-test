import { useDispatch } from "react-redux";
import { increaseTicketCount } from "../store/actions";

import { buttonLoading } from "../utils/bem";
import "../css/button-loading.css"

const ButtonLoading = () => {
    const dispatch = useDispatch();

    return (
        <button className={buttonLoading()} onClick={() => dispatch(increaseTicketCount())}>Показать еще 5 билетов!</button>
    );
}

export default ButtonLoading;