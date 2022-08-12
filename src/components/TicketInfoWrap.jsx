import { ticketInfoWrap } from "../utils/bem";
import '../css/ticket-info-wrap.css'

const TicketInfoWrap = (props) => {
    return (
        <div className={ticketInfoWrap()}>{props.children}</div>
    );
}

export default TicketInfoWrap;