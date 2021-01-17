import { SET_CURRENT_CONTACT } from "../actions"

// reducer for current user for showing info about him

const currentContactReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case SET_CURRENT_CONTACT:
            return { ...action.payload }
        default:
            return state
    }
}

export default currentContactReducer