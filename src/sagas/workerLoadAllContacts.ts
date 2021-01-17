import { setIndex } from "./setIndex"
import { put, call } from "redux-saga/effects"
import { putAllContacts } from "../actions"
import { fetchAllContacts } from "../api"

export function* workerLoadAllContacts(action: any) {
    const { filter, page, loadedAmount } = action.payload

    const { data } = yield call(fetchAllContacts, page, filter)
    setIndex(loadedAmount, data)

    yield put(putAllContacts({ contacts: data.contacts, loadedAmount: data.contacts_ids.length }))
}