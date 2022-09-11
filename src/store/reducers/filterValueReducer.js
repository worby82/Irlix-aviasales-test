import { CHANGE_FILTER } from "../actionTypes";

const filterValueReducer = (state = [], action) => {
    switch (action.type) {

        case CHANGE_FILTER:
            const value = action.payload
            const filterValue = state;

            if (!filterValue.includes(value)) {
                return [...filterValue, value]
            } else {
                const copyFilterValue = [...filterValue];
                copyFilterValue.splice(copyFilterValue.indexOf(value), 1)
                return [...copyFilterValue]
            }

        default:
            return state

    }
}

export default filterValueReducer;