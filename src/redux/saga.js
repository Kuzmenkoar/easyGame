import { all } from 'redux-saga/effects'
import { saga as easyGameSaga } from '../ducks/easyGame/saga'

export default function* rootSaga() {
  yield all([easyGameSaga()])
}
