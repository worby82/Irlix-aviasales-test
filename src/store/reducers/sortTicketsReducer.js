import { SORT_TICKETS } from "../actionTypes";

import getSortedFunction from "../../utils/getSortedFunction";

const sortTicketsReducer = (state = [], action) => {
    switch (action.type) {

        case SORT_TICKETS:
            const tickets = action.payload.tickets
            const activeTab = action.payload.activeTab;
            const ticketCount = action.payload.ticketCount;

            const sortedTickets = [...tickets].sort(getSortedFunction(activeTab)).slice(0, ticketCount)
            return sortedTickets;

        default:
            return state
    }
}

export default sortTicketsReducer;