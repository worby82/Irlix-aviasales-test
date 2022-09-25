import TicketData from '../../API/TicketData';
import { CHANGE_ACTIVE_TAB, CHANGE_FILTER, FILTER_TICKETS, INCREASE_TICKET_COUNT, LOAD_SEARCH_ID, LOAD_STOP, LOAD_TICKETS, SORT_TICKETS } from '../actionTypes';

export function increaseTicketCount(payload) {
    return {
        type: INCREASE_TICKET_COUNT,
        payload
    }
}

export function changeActiveTab(payload) {
    return {
        type: CHANGE_ACTIVE_TAB,
        payload
    }
}

export function sortTickets(payload) {
    return {
        type: SORT_TICKETS,
        payload
    }
}

export function changeFilter(payload) {
    return {
        type: CHANGE_FILTER,
        payload
    }
}

export function filterTickets(payload) {
    return {
        type: FILTER_TICKETS,
        payload
    }
}

export function loadSearchID() {
    return async dispatch => {
        TicketData.getSearchId().then(searchId => dispatch({
            type: LOAD_SEARCH_ID,
            payload: searchId
        }));
    }
}

export function loadTickets(payload) {
    return async dispatch => {
        TicketData.getDataTickets(payload)
            .then(data => {
                dispatch({
                    type: LOAD_TICKETS,
                    payload: data.tickets
                });
                dispatch({
                    type: LOAD_STOP,
                    payload: data.stop
                });
            })
            .catch(() => dispatch({
                type: LOAD_TICKETS,
                payload: []
            }));
    }
}