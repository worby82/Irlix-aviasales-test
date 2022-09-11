import { combineReducers } from "redux";

import ticketCountReducer from "./ticketCountReducer";
import activeTabReducer from "./activeTabReducer";
import sortTicketsReducer from "./sortTicketsReducer";
import filterValueReducer from "./filterValueReducer";
import filterTicketsReducer from "./filterTicketsReducer";
import searchIdReducer from "./searchIdReducer";
import ticketsReducer from "./ticketsReducer";
import stopReducer from "./stopReducer";

const rootReducer = combineReducers({
    searchId: searchIdReducer,
    stop: stopReducer,
    tickets: ticketsReducer,
    ticketCount: ticketCountReducer,

    filterValue: filterValueReducer,
    filterTickets: filterTicketsReducer,

    activeTab: activeTabReducer,
    sortedTickets: sortTicketsReducer
});

export default rootReducer;