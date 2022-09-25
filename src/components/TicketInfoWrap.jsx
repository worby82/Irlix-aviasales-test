import TicketInfo from "./TicketInfo";

import { ticketInfoWrap } from "../utils/bem";
import '../css/ticket-info-wrap.css'
import timeFlight from "../utils/timeFlight";

const TicketInfoWrap = ({ segment }) => {
    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric"
    });

    const dateDeparture = new Date(segment.date);
    const dateArrival = new Date(Date.parse(segment.date) + segment.duration * 60000);

    

    const stops = segment.stops;
    let transfersCount = '';

    switch (stops.length) {
        case 1:
            transfersCount = '1 пересадка';
            break;
        case 2:
            transfersCount = '2 пересадки';
            break;
        case 3:
            transfersCount = '3 пересадки';
            break;
        default:
            transfersCount = 'Без пересадок';
    }

    return (
        <div className={ticketInfoWrap()}>
            <TicketInfo head={segment.destination + ' - ' + segment.origin} text={formatter.format(dateDeparture) + ' – ' + formatter.format(dateArrival)} />
            <TicketInfo head='В пути' text={timeFlight(segment)} />
            <TicketInfo head={transfersCount} text={stops.join(', ')} />
        </div>
    );
}

export default TicketInfoWrap;