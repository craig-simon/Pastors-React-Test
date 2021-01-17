import { CHANGE_MODAL } from "../actions";

// Reducer for last opened modal window. Using for switching between contact info and modal window with contacts

const modalReducer = (state: string | null = null, action: any) => {
    switch(action.type) {
        case CHANGE_MODAL:
            return action.payload
        default:
            return state
    }
}

export default modalReducer