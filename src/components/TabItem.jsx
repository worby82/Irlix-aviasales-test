import { useEffect } from "react";

import { tabItem } from "../utils/bem";
import "../css/tab-item.css"

const TabItem = ({ name, value, ticketCount, tickets, setSortedTickets, activeTab, setActiveTab }) => {
    useEffect(() => {
        sorting(activeTab);
    }, [ticketCount, tickets])

    const sorting = (value) => {
        setActiveTab(value);
        setSortedTickets([...tickets].sort(getSortedFunction(value)).slice(0, ticketCount));
    }

    const getSortedFunction = (value) => {
        switch (value) {
            case 'fast':
                return (prev, next) => {
                    return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration);
                };
            case 'optimal':
                return (prev, next) => {
                    return (prev.segments[0].duration + prev.segments[1].duration) - (next.segments[0].duration + next.segments[1].duration) & prev.price - next.price;
                };
            default:
                return (prev, next) => prev.price - next.price;
        }
    }

    return (
        <button className={tabItem({ active: value === activeTab })} key={value} onClick={() => sorting(value)}>{name}</button>
    )
}

export default TabItem;