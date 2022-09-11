import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab, sortTickets } from "../store/actions";

import { tabItem } from "../utils/bem";
import "../css/tab-item.css"

const TabItem = ({ name, value }) => {

    const ticketCount = useSelector(state => state.ticketCount);
    const activeTab = useSelector(state => state.activeTab);
    const tickets = useSelector(state => state.filterTickets);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortTickets({ tickets, activeTab, ticketCount }));
    }, [ticketCount, tickets, activeTab])

    const handleSort = (value) => {
        dispatch(changeActiveTab(value));
    }


    return (
        <button className={tabItem({ active: value === activeTab })} key={value} onClick={() => handleSort(value)}>{name}</button>
    )
}

export default TabItem;