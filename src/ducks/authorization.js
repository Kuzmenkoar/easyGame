import { Record } from 'immutable'
import { all, put, take, call, delay } from 'redux-saga/effects'
import firebase  from 'firebase'
import {eventChannel} from 'redux-saga'

export const moduleName = 'authorization'
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'

const ReducerRecord = Record({
  user: null,
  isLoading: null,
  error: null,
})

export default function reducer(state = new ReducerRecord(), action) {
  const { type, payload, error } = action

  switch (type) {
    case SIGN_IN_REQUEST:
      return state.set('isLoading', true)
    case SIGN_IN_SUCCESS:
      return state.set('user', payload).set('isLoading', false)
    case SIGN_IN_ERROR:
      return state
      .set('error', error)
      .set('isLoading', false)
    default:
      return state
  }
}

export const signIn = (email, password) => ({
    type: SIGN_IN_REQUEST,
    payload: { email, password },
})

export const signInSaga = function*() {
  const auth = firebase.auth()

  while (true) {
    const action = yield take(SIGN_IN_REQUEST)
    const {email, password} = action.payload

    try {
      yield call([auth, auth.signInWithEmailAndPassword], email, password)
    } catch (error) {
      yield put({
        type: SIGN_IN_ERROR,
        error,
      })
    }
  }
}

export const removeError = function*() {
  while(true) {
    const action = yield take(SIGN_IN_ERROR)

    if (action.error) {
      yield delay(200)
      yield put({
        type: SIGN_IN_ERROR,
        error: null,
      })
    }
  }
}

const createAuthChannel = () => eventChannel(emit => firebase.auth().onAuthStateChanged(user => emit({ user })))

export const userAuthorizationStatus = function*() {
  const chan = yield call(createAuthChannel)

  while (true) {
    const user = yield take(chan)

    if (user) {
      yield put({
        type: SIGN_IN_SUCCESS,
        payload: { user },
      })
    } else {
      yield put({
        type: SIGN_OUT_SUCCESS,
        payload: { user },
      }) 
    }
  }
} 

export const saga = function*() {
  yield all([
    signInSaga(),
    userAuthorizationStatus(),
    removeError(),
  ])
}