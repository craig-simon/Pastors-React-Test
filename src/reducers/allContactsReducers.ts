import { PUT_ALL_CONTACTS, PUT_ALL_NEW_CONTACTS, INC_ALL_CONTACTS_PAGE, CHANGE_ALL_CONTACT_QUERY, SET_ALL_COTNACTS_ONLY_EVEN } from "../actions"

// contacts + page
// Reducer for all contacts. Consist of current page, contacts, amount of loaded contacts, current search query, and info about only even checkbox

const initialState = {
    page: 1,
    contacts: {},
    loadedAmount: 0,
    searchQuery: '',
    onlyEven: false
}

interface allContactsReducerState {
    page: number,
    contacts: Record<string, object>,
    loadedAmount: number,
    searchQuery: string,
    onlyEven: boolean
}

const allContactsReducer = (state: allContactsReducerState = initialState, action: any) => {
    switch (action.type) {
        case PUT_ALL_CONTACTS:
            return { 
                ...state, 
                contacts: { ...state.contacts, ...action.payload.contacts }, 
                loadedAmount: state.loadedAmount + action.payload.loadedAmount
            }
        case PUT_ALL_NEW_CONTACTS:
            return { ...state, contacts: { ...action.payload.contacts }, page: 1, loadedAmount: action.payload.loadedAmount }
        case INC_ALL_CONTACTS_PAGE:
            return { ...state, page: state.page + 1 }
        case CHANGE_ALL_CONTACT_QUERY:
            return { ...state, searchQuery: action.payload }
        case SET_ALL_COTNACTS_ONLY_EVEN:
            return { ...state, onlyEven: !state.onlyEven }
        default:
            return state
    }
}

export default allContactsReducer