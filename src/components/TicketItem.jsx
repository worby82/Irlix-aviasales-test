import { ticketItem } from "../utils/bem";
import "../css/ticket-item.css"
import TicketInfo from "./TicketInfo";
import TicketInfoWrap from "./TicketInfoWrap";

const TicketItem = () => {
    return (
        <li className={ticketItem()}>
            <div className={ticketItem('header')}>
                <p className={ticketItem('price')}>1000 р</p>
                <img className={ticketItem('iata-logo')} src="" alt="" />
            </div>
            <TicketInfoWrap>
                <TicketInfo head='MOW – HKT' text='10:45 – 08:00' />
                <TicketInfo head='В пути' text='21ч 15м' />
                <TicketInfo head='2 пересадки' text='HKG, JNB' />
            </TicketInfoWrap>
            <TicketInfoWrap>
                <TicketInfo head='MOW – HKT' text='11:20 – 00:50' />
                <TicketInfo head='В пути' text='13ч 30м' />
                <TicketInfo head='1 пересадка' text='HKG' />
            </TicketInfoWrap>
        </li>
    )
}

export default TicketItem;