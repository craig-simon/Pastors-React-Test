export const LOAD_ALL_CONTACTS = 'LOAD_ALL_CONTACT'
export const LOAD_ALL_NEW_CONTACTS = 'LOAD_ALL_NEW_CONTACTS'
export const PUT_ALL_CONTACTS = 'PUT_ALL_CONTACTS'
export const PUT_ALL_NEW_CONTACTS = 'PUT_ALL_NEW_CONTACTS'
export const INC_ALL_CONTACTS_PAGE = 'INC_ALL_CONTACTS_PAGE'
export const CHANGE_ALL_CONTACT_QUERY = 'CHANGE_ALL_CONTACT_QUERY'
export const LOAD_US_CONTACTS = 'LOAD_US_CONTACT'
export const LOAD_US_NEW_CONTACTS = 'LOAD_US_NEW_CONTACTS'
export const PUT_US_CONTACTS = 'PUT_US_CONTACTS'
export const PUT_US_NEW_CONTACTS = 'PUT_US_NEW_CONTACTS'
export const INC_US_CONTACTS_PAGE = 'INC_US_CONTACTS_PAGE'
export const CHANGE_US_CONTACT_QUERY = 'CHANGE_US_CONTACT_QUERY'
export const CHANGE_MODAL = 'CHANGE_MODAL'
export const SET_ALL_COTNACTS_ONLY_EVEN = 'SET_ALL_COTNACTS_ONLY_EVEN'
export const SET_US_COTNACTS_ONLY_EVEN = 'SET_US_COTNACTS_ONLY_EVEN'
export const SET_CURRENT_CONTACT = 'SET_CURRENT_CONTACT'

// action to activate saga to load all contacts
export const loadAllContacts = (page: number, filter: string, loadedAmount: number) => {
    return {
        type: LOAD_ALL_CONTACTS,
        payload: {
            page, filter, loadedAmount
        }
    }
}

// action to activate to load all new contacts (creates new object with contacts, not just mutate him)
export const loadAllNewContacts = (filter: string) => {
    return {
        type: LOAD_ALL_NEW_CONTACTS,
        payload: {
            filter
        }
    }
}

// action to create new state object with "all" contacts
export const putAllNewContacts = (payload: any) => {
    return {
        type: PUT_ALL_NEW_CONTACTS,
        payload: {
            contacts: payload.contacts,
            loadedAmount: payload.loadedAmount
        }
    }
}

// action to mutate object with new contacts
export const putAllContacts = (payload: any) => {
    return {
        type: PUT_ALL_CONTACTS,
        payload: {
            contacts: payload.contacts,
            loadedAmount: payload.loadedAmount
        }
    }
}

// action to increment current page 
export const incAllContactsPage = () => {
    return {
        type: INC_ALL_CONTACTS_PAGE
    }
}

// action to change query of all contacts modal window
export const changeAllContactsQuery = (value: string) => {
    return {
        type: CHANGE_ALL_CONTACT_QUERY,
        payload: value
    }
}

// action to activate saga to load us contacts
export const loadUsContacts = (page: number, filter: string, loadedAmount: number) => {
    return {
        type: LOAD_US_CONTACTS,
        payload: {
            page, filter, loadedAmount
        }
    }
}

// action to activate to load us new contacts (creates new object with contacts, not just mutate him)
export const loadUsNewContacts = (filter: string) => {
    return {
        type: LOAD_US_NEW_CONTACTS,
        payload: {
            filter
        }
    }
}

// action to create new state object with "us" contacts
export const putUsNewContacts = (payload: any) => {
    return {
        type: PUT_US_NEW_CONTACTS,
        payload: {
            contacts: payload.contacts,
            loadedAmount: payload.loadedAmount
        }
    }
}

// action to change last opened modal window
export const changeModal = (modal: string) => {
    return {
        type: CHANGE_MODAL,
        payload: modal
    }
}

// action to mutate object with new contacts
export const putUsContacts = (payload: any) => {
    return {
        type: PUT_US_CONTACTS,
        payload: {
            contacts: payload.contacts,
            loadedAmount: payload.loadedAmount
        }
    }
}

// action to increment current us contacts page
export const incUsContactsPage = () => {
    return {
        type: INC_US_CONTACTS_PAGE
    }
}

// action to change us contacts search query
export const changeUsContactsQuery = (value: string) => {
    return {
        type: CHANGE_US_CONTACT_QUERY,
        payload: value
    }
}

// action to set "all contacts" modal window to show only even ids
export const setAllContactsOnlyEven = () => {
    return {
        type: SET_ALL_COTNACTS_ONLY_EVEN
    }
}

// action to set "us contacts" modal window to show only even ids
export const setUsContactsOnlyEven = () => {
    return {
        type: SET_US_COTNACTS_ONLY_EVEN
    }
}

// action to set current picked contact 
export const setCurrentContact = (contact: any) => {
    return {
        type: SET_CURRENT_CONTACT,
        payload: contact
    }
}