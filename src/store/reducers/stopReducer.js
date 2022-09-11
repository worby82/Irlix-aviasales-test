import { LOAD_STOP } from "../actionTypes";

const stopReducer = (state = null, action) => {
    switch (action.type) {

        case LOAD_STOP:
            return action.payload

        default:
            return state

    }
}

export default stopReducer;