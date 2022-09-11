import { LOAD_TICKETS } from "../actionTypes";

const ticketsReducer = (state = [], action) => {
    switch (action.type) {

        case LOAD_TICKETS:
            return [...state, ...action.payload]

        default:
            return state

    }
}

export default ticketsReducer;