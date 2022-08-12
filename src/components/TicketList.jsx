import { ticketList } from "../utils/bem";
import "../css/ticket-list.css"

import TicketItem from "./TicketItem";

const TicketList = () => {
    return(
        <ul className={ticketList()}>
            <TicketItem />
        </ul>
    )
}

export default TicketList;