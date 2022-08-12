import { section } from "../utils/bem";
import "../css/section.css"

const Section = (props) => {
    return (
        <section className={section()}>{props.children}</section>
    );
}

export default Section;