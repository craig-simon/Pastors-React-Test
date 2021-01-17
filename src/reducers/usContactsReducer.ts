// contacts + page
// Reducer for us contacts. Consist of current page, contacts, amount of loaded contacts, current search query, and info about only even checkbox

import { PUT_US_CONTACTS, PUT_US_NEW_CONTACTS, INC_US_CONTACTS_PAGE, CHANGE_US_CONTACT_QUERY, SET_US_COTNACTS_ONLY_EVEN } from "../actions"

const initialState = {
    page: 1,
    contacts: {},
    loadedAmount: 0,
    searchQuery: '',
    onlyEven: false
}

interface usContactsReducerState {
    page: number,
    contacts: Record<string, object>,
    loadedAmount: number,
    searchQuery: string,
    onlyEven: boolean
}

const usContactsReducer = (state: usContactsReducerState = initialState, action: any) => {
    switch (action.type) {
        case PUT_US_CONTACTS:
            return { 
                ...state, 
                contacts: { ...state.contacts, ...action.payload.contacts }, 
                loadedAmount: state.loadedAmount + action.payload.loadedAmount
            }
        case PUT_US_NEW_CONTACTS:
            return { ...state, contacts: { ...action.payload.contacts }, page: 1, loadedAmount: action.payload.loadedAmount }
        case INC_US_CONTACTS_PAGE:
            return { ...state, page: state.page + 1 }
        case CHANGE_US_CONTACT_QUERY:
            return { ...state, searchQuery: action.payload }
        case SET_US_COTNACTS_ONLY_EVEN:
            return { ...state, onlyEven: !state.onlyEven }
        default:
            return state
    }
}

export default usContactsReducer