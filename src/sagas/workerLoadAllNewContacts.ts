import { setIndex } from "./setIndex"
import { call, put } from "redux-saga/effects"
import { fetchAllContacts } from "../api"
import { putAllContacts } from "../actions"

export function* workerLoadAllNewContacts(action: any) {
    const { filter } = action.payload

    const { data } = yield call(fetchAllContacts, 1, filter)
    setIndex(0, data)

    yield put(putAllContacts({ contacts: data.contacts, loadedAmount: data.contacts_ids.length }))
}