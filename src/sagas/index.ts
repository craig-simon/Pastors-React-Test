import { all, takeEvery } from 'redux-saga/effects'
import { LOAD_ALL_CONTACTS, LOAD_ALL_NEW_CONTACTS, LOAD_US_CONTACTS, LOAD_US_NEW_CONTACTS } from '../actions'

import { workerLoadAllContacts } from './workerLoadAllContacts'
import { workerLoadAllNewContacts } from './workerLoadAllNewContacts'
import { workerLoadUSContacts } from './fetchLoadUSContacts'
import { workerLoadUSNewContacts } from './workerLoadUSNewContacts'

export default function* root() {
    yield all ([
        takeEvery(LOAD_ALL_CONTACTS, workerLoadAllContacts),
        takeEvery(LOAD_ALL_NEW_CONTACTS, workerLoadAllNewContacts),
        takeEvery(LOAD_US_CONTACTS, workerLoadUSContacts),
        takeEvery(LOAD_US_NEW_CONTACTS, workerLoadUSNewContacts)
    ])
}