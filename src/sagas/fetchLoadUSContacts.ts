import { call, put } from "redux-saga/effects"
import { fetchUSContacts } from "../api"
import { setIndex } from "./setIndex"
import { putUsContacts } from "../actions"

export function* workerLoadUSContacts(action: any) {
    const { filter, page, loadedAmount } = action.payload

    const { data } = yield call(fetchUSContacts, page, filter)
    setIndex(loadedAmount, data)

    yield put(putUsContacts({ contacts: data.contacts, loadedAmount: data.contacts_ids.length }))
}