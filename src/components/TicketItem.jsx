import TicketInfoWrap from "./TicketInfoWrap";

import formattedPrice from "../utils/formattedPrice";
import { ticketItem } from "../utils/bem";
import "../css/ticket-item.css"

const TicketItem = ({ price, iata, segments }) => {
    
    // price.toLocaleString('ru-RU') р


    return (
        <li className={ticketItem()}>
            <div className={ticketItem('header')}>
                <p className={ticketItem('price')}>{formattedPrice(price)}</p>
                <img className={ticketItem('iata-logo')} src={`//pics.avs.io/99/36/${iata}.png`} alt="" />
            </div>
            {
                segments.map((segment, id) => <TicketInfoWrap key={id} segment={segment} />)
            }
        </li>
    )
}

export default TicketItem;