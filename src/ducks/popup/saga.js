import { put } from 'redux-saga/effects'
import { closePopup } from './action'

export const closePopupSaga = function*() {
  yield put(closePopup())
}
