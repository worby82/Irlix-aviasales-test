import logo from '../images/Logo.svg'

import { header } from "../utils/bem";
import "../css/header.css"

const Header = () => {
    return (
        <header className={header()}>
            <img src={logo} alt="Логотип" />
        </header>
    );
}

export default Header