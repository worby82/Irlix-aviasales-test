import { ticketItem } from "../utils/bem";
import "../css/ticket-item.css"
import TicketInfo from "./TicketInfo";
import TicketInfoWrap from "./TicketInfoWrap";

const TicketItem = ({ price, iata, segments }) => {
    return (
        <li className={ticketItem()}>
            <div className={ticketItem('header')}>
                <p className={ticketItem('price')}>{price.toLocaleString('ru-RU')} р</p>
                <img className={ticketItem('iata-logo')} src={`//pics.avs.io/99/36/${iata}.png`} alt="" />
            </div>
            {segments.map((segment, id )=> {
                return (
                    <TicketInfoWrap key={id}>
                        <TicketInfo head={segment.destination + ' - ' + segment.origin} text='10:45 – 08:00' />
                        <TicketInfo head='В пути' text='21ч 15м' />
                        <TicketInfo head='2 пересадки' text={segment.stops.join(', ')} />
                    </TicketInfoWrap>
                )
            })}
        </li>
    )
}

export default TicketItem;