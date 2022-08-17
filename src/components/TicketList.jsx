import { ticketList } from "../utils/bem";
import "../css/ticket-list.css"

import TicketItem from "./TicketItem";

const TicketList = ({ tickets }) => {
    return (
        <ul className={ticketList()}>
            {
                tickets.map((item,id) => {
                    return <TicketItem
                        key={id}
                        price={item.price}
                        iata={item.carrier}
                        segments={item.segments}
                        // back={item.segments[1]}
                    />
                })
            }
        </ul>
    )
}

export default TicketList;