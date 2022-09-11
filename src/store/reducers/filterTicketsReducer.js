import { FILTER_TICKETS } from "../actionTypes";

const filterTicketsReducer = (state = [], action) => {

    switch (action.type) {

        case FILTER_TICKETS:
            const filterValue = action.payload.filterValue;
            const tickets = action.payload.tickets;

            if (filterValue.includes('all') === false & filterValue.length > 0) {
                return [...tickets.filter(itemFilter =>
                    filterValue.includes(String(itemFilter.segments[0].stops.length))
                    & filterValue.includes(String(itemFilter.segments[1].stops.length))
                )]
            } else {
                return [...tickets]
            }

        default:
            return state
    }
}

export default filterTicketsReducer;