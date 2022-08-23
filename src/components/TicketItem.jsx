import TicketInfoWrap from "./TicketInfoWrap";

import { ticketItem } from "../utils/bem";
import "../css/ticket-item.css"

const TicketItem = ({ price, iata, segments }) => {
    return (
        <li className={ticketItem()}>
            <div className={ticketItem('header')}>
                <p className={ticketItem('price')}>{price.toLocaleString('ru-RU')} р</p>
                <img className={ticketItem('iata-logo')} src={`//pics.avs.io/99/36/${iata}.png`} alt="" />
            </div>
            {
                segments.map((segment, id) => <TicketInfoWrap key={id} segment={segment} />)
            }
        </li>
    )
}

export default TicketItem;