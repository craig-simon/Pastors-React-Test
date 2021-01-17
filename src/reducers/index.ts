import { combineReducers } from 'redux'
import allContactsReducer from './allContactsReducers'
import usContactsReducer from './usContactsReducer'
import modalReducer from './modalReducer'
import currentContactReducer from './currentContactReducer'

export default combineReducers({
    allContacts: allContactsReducer,
    usContacts: usContactsReducer,
    modal: modalReducer,
    currentContact: currentContactReducer
})