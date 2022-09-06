import Container from "./Container";

import { main } from "../utils/bem";
import "../css/main.css"

const Main = (props) => {
    return (
        <main className={main()}>
            <Container>{props.children}</Container>
        </main>
    );
}

export default Main;