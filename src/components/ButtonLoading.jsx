import { buttonLoading } from "../utils/bem";
import "../css/button-loading.css"

const ButtonLoading = () => {
    return (
        <button className={buttonLoading()}>Показать еще 5 билетов!</button>
    );
}

export default ButtonLoading;