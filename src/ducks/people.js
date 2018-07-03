import { Record, OrderedMap } from 'immutable'
import { all, put, take, call } from 'redux-saga/effects'
import firebase from 'firebase'

export const ADD_PEOPLE_ITEM_REQUEST = 'ADD_PEOPLE_ITEM_REQUEST'
export const ADD_PEOPLE_ITEM_SUCCESS = 'ADD_PEOPLE_ITEM_SUCCESS'
export const ADD_PEOPLE_ITEM_ERROR = 'ADD_PEOPLE_ITEM_ERROR'

const ReducerRecord = Record({
  isLoading: false,
  error: false,
  entities: new OrderedMap({})
})

export default function reducer (state = ReducerRecord, action) {
  const { type, payload, error } = action;

  switch (type) {
    case ADD_PEOPLE_ITEM_REQUEST:
      return state.set('isLoading', true)
    case ADD_PEOPLE_ITEM_ERROR:
      return state
        .set('error', error)
        .set('isLoading', false)
    default:
      return state;
  }
}

export const addPeople = (data) => ({
  type: ADD_PEOPLE_ITEM_REQUEST,
  payload: data
})

export const addPeopleSaga = function*() {
  const auth = firebase.auth()

  while (true) {
    const action = yield take(ADD_PEOPLE_ITEM_REQUEST)
    const data = action.payload

    try {
      // yield call()
    } catch (error) {
      yield put({
        type: ADD_PEOPLE_ITEM_ERROR,
        error: error
      })
    }
  }
}

export const saga = function*() {
  yield all([])
}