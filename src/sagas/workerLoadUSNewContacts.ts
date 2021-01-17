import { fetchUSContacts } from "../api"
import { call, put } from "redux-saga/effects"
import { setIndex } from "./setIndex"
import { putUsNewContacts } from "../actions"

export function* workerLoadUSNewContacts(action: any) {
    const { filter } = action.payload

    const { data } = yield call(fetchUSContacts, 1, filter)
    setIndex(0, data)

    yield put(putUsNewContacts({ contacts: data.contacts, loadedAmount: data.contacts_ids.length }))
}