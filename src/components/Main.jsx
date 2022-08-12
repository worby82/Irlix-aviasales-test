import { main } from "../utils/bem";
import "../css/main.css"

import Container from "./Container";

const Main = (props) => {
    return (
        <main className={main()}>
            <Container>{props.children}</Container>
        </main>
    );
}

export default Main;